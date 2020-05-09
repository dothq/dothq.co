import React from 'react'

import { StyledBlogCard, CardDate, CardTitle, CardDescription, ReadMore } from "./style"
import FeatherIcon from 'feather-icons-react';
import { Link } from 'gatsby';
import TimeAgo from 'timeago-react';

export const Time = ({ date }) => (
    <TimeAgo
        datetime={date}
        locale={"en-US"}
        live={true}
    />
)

export const BlogCard = ({ post }) => {
    return (
        <StyledBlogCard>
            <CardDate>{new Date(post.published_at).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} (<Time date={post.published_at} />)</CardDate>
            <Link to={`/blog/${post.slug}`}>
                <CardTitle>{post.title}</CardTitle>
            </Link>
            <CardDescription>{post.excerpt}</CardDescription>
            <Link to={`/blog/${post.slug}`}>
                <ReadMore>
                    <FeatherIcon icon={"corner-down-right"} size={20} />
                    <span>READ MORE</span>
                </ReadMore>
            </Link>
        </StyledBlogCard>
    )
}