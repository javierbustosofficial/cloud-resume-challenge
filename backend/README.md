## Python Script Setup
To render the .md files into a JSON data source, I will be using a Python script called [`render_items.py`](./lib/render_items.py)

Before creating the script, I will define the markdown package in [`requirements.txt`](./requirements.txt) and will install it via the following command:

```sh
pip install -r requirements.txt
```
Now we can define the script in [`render_items.py`](./lib/render_items.py). Feel free to navigate there to view it. This script will be used to render markdown for both Projects and Blog posts. Blogs will be rendered from the website's home tab. 

## Rendering Markdown with Front Matter

Both project items and blog posts will rely on markdown files with front matter. These markdown files will be processed into JSON objects that the frontend can consume as a data source. Organizing content this way keeps all project and blog data structured and contained within dedicated directories.

Project markdown files will live under a projects directory, while blog posts will be organized by date under a blog directory. Each markdown file represents a single project or blog post and includes both metadata (via front matter) and the main content.

Example directory structure:

```sh
/projects/my-project.md
/blog/2026-01-20/my-blog-post.md
```

## Using Invoke 
I'll be using Invoke to create two separate tasks - one for rendering projects, and the other for rendering blog posts. By defining these tasks, I can choose to render project data or blog data separately, rather than regenerating all content at once. This is useful as the site grows, since project and blog content may be updated at different times. 

Each task passes the appropriate content directory ([`projects`](./data/projects/) or [`blog`](./data/blog/)) into [`render_items.py`](./lib/render_items.py), generating the corresponding JSON data source for the frontend. 

```sh
invoke --list
invoke render-blog
invoke render-projects
```
