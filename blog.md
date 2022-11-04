---
layout: default
title: Blog
---
<h2>Latest Posts</h2>
    {% for post in site.posts %}
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {{ post.excerpt }}
{% endfor %}