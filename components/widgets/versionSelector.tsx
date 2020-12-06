import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

function VersionSelector(props) {
    if (!props.selector) return null;
    const [posts, updatePosts] = useState([]);
    const [loading, toggleLoading] = useState(true);
    useEffect(() => {
        if (!props.selector) return;
        toggleLoading(true);
        axios
            .get(
                `/posts/?meta_key=VS&meta_value=${props.selector}&_fields=id,slug,VS-version`
            )
            .then(({ data }) => {
                toggleLoading(false);
                updatePosts(data);
            });
    }, [props.selector]);

    return loading ? null : (
        <div>
            <div>
                <span style={{ fontSize: '18px' }}>
                    This tutorial is available for:
                </span>
            </div>
            {posts.map((post) => (
                <div key={post?.slug}>
                    <Link to={`/${post?.slug}`}>
                        <Span>
                            macOS {post?.['VS-version']}
                            {`/${post?.slug}` === props?.pathname ? ' ←' : null}
                        </Span>
                    </Link>
                </div>
            ))}
        </div>
    );
}

const Span = styled.span`
    color: ${({ theme }) => theme.color};
    :hover {
        color: #3273dc;
    }
`;

export default connect(({ posts, router }) => {
    const currPost = posts.current_post;
    const a = currPost?.['VS']?.match(/\[(.*?)\]/);
    return {
        selector: currPost?.['VS'],
        title: currPost?.['VS-title'],
        dyn: [a ? currPost?.[a[1]] : null],
        pathname: router.location.pathname,
    };
})(VersionSelector);
