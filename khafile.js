let project = new Project('ShaderEditor');
project.addAssets('Assets/**');
project.addShaders('Sources/Shaders/**');
project.addSources('Sources');
project.windowOptions.width = 800;
project.windowOptions.height = 600;
resolve(project);
