var index = require('./routes/index');
var project = require('./routes/project');
app.get('/', index.view);
app.get('/project', project.viewProject);
