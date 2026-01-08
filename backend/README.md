## Render Project Eumlate Markdown

For this project I want to be able to render markdown.
Through my research, I've learned that rendering markdown serverside is preferred, since clientside redendering provides inconsistent results.

The `render_projects.py` file will render our json with the markdown into html.
Eventually I'll rework this code into a Lambda function in AWS.

## Render Items with Frontmatter

Both my projects and blog posts rely on markdown. It would be better to colelct markdown files with Frontmatter and turn those into json objects. Possibly, having everything contained within a directory for data.

i.e `/projects/:handle.markdown`
i.e `/blog/:date/:handle.markdown`

## Tasks runner with Invoke

I am using the task runner Invoke, and refactored the render_projects into render_items so it can render both the projecrts and the blog.

```sh
invoke --list
invoke render-blog
invoke render-projects
```
