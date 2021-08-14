# simple_web_project_template
a simple template for creating websites

Create a new project and use this repo as template.

```
git clone https://github.com/robindanzinger/{my-website-project}
cd {my-website-project}

npm install

chmod 700 createhtml.sh
npm run dev
```

Now you can edit your html, css and js files. Browser should reload if any file changes.

Then go to:

localhost:3000/page/example.html


# Build project
```
./createhtml.sh
gulp
```

TODO: call ./createhtml.sh from gulp script.

# Deploy
Copy dist folder to your server
