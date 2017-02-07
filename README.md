You can change the shader in Sources/Shaders/shader.frag.glsl

These uniforms are available:
```
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
```

For desktop apps you need to compile with opengl, because directx doesn't works with gl_FragCoord.
```
node Kha/make windows --graphics opengl
```
