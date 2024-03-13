Onyx.register_module("__webgl", instance => ({
    init(context) {
        instance.gl = instance.load_value(context);
        instance.glState = {
            programs: [],
            shaders: [],
            buffers: [],
            framebuffers: [],
            renderbuffers: [],
            textures: [],
            uniformlocs: [],
            vertexArrays: [],
        };

        return 1;
    },

    activeTexture(texture) {
        instance.gl.activeTexture(texture);
    },
    attachShader(program, shader) {
        instance.gl.attachShader(instance.glState.programs[program], instance.glState.shaders[shader]);
        return instance.glState.programs[program];
    },
    bindAttribLocation(program, index, name, namelen) {
        instance.gl.bindAttribLocation(instance.glState.programs[program], index, instance.extract_string(name, namelen));
    },
    bindBuffer(target, buffer) {
        if (buffer == -1) {
            instance.gl.bindBuffer(target, null);
        } else {
            instance.gl.bindBuffer(target, instance.glState.buffers[buffer]);
        }
    },
    bindBufferBase(target, index, buffer) {
        if (buffer == -1) {
            instance.gl.bindBufferBase(target, index, null);
        } else {
            instance.gl.bindBufferBase(target, instance.glState.buffers[buffer]);
        }
    },
    bindBufferRange(target, index, buffer, offset, size) {
        if (buffer == -1) {
            instance.gl.bindBufferRange(target, index, null, offset, size);
        } else {
            instance.gl.bindBufferRange(target, index, instance.glState.buffers[buffer], offset, size);
        }
    },
    bindFramebuffer(target, framebuffer) {
        if (framebuffer == -1) {
            instance.gl.bindFramebuffer(target, null);
        } else {
            instance.gl.bindFramebuffer(target, instance.glState.framebuffers[framebuffer]);
        }
    },
    bindRenderbuffer(target, renderbuffer) {
        if (renderbuffer == -1) {
            instance.gl.bindRenderbuffer(target, null);
        } else {
            instance.gl.bindRenderbuffer(target, instance.glState.renderbuffers[renderbuffer]);
        }
    },
    bindTexture(target, texture) {
        if (texture == -1) {
            instance.gl.bindTexture(target, null);
        } else {
            instance.gl.bindTexture(target, instance.glState.textures[texture]);
        }
    },
    bindVertexArray(vertexArray) {
        if (vertexArray == -1) {
            instance.gl.bindVertexArray(null);
        } else {
            instance.gl.bindVertexArray(instance.glState.vertexArrays[vertexArray]);
        }
    },
    blendColor(red, green, blue, alpha) {
        instance.gl.blendColor(red, green, blue, alpha);
    },
    blendEquation(mode) {
        instance.gl.blendEquation(mode);
    },
    blendEquationSeparate(modeRGB, modeAlpha) {
        instance.gl.blendEquationSeparate(modeRGB, modeAlpha);
    },
    blendFunc(sfactor, dfactor) {
        instance.gl.blendFunc(sfactor, dfactor);
    },
    blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
        instance.gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
    },
    blitFramebuffer(sx0, sy0, sx1, sy1, dx0, dy0, dx1, dy1, mask, filter) {
        instance.gl.blitFramebuffer(sx0, sy0, sx1, sy1, dx0, dy0, dx1, dy1, mask, filter);
    },
    bufferDataWithData(target, bufferdata, bufferlen, usage) {
        const data = new DataView(instance.memory.buffer, bufferdata, bufferlen);
        instance.gl.bufferData(target, data, usage);
    },
    bufferDataNoData(target, size, usage) {
        instance.gl.bufferData(target, size, usage);
    },
    bufferSubData(target, offset, bufferdata, bufferlen) {
        const data = new DataView(instance.memory.buffer, bufferdata, bufferlen);
        instance.gl.bufferSubData(target, offset, data);
    },
    checkFramebufferStatus(target) {
        return instance.gl.checkFramebufferStatus(target);
    },
    clear(bit) {
        instance.gl.clear(bit);
    },
    clearColor(r, g, b, a) {
        instance.gl.clearColor(r, g, b, a);
    },
    clearDepth(depth) {
        instance.gl.clearDepth(depth);
    },
    clearStencil(stencil) {
        instance.gl.clearStencil(stencil);
    },
    colorMask(r, g, b, a) {
        instance.gl.colorMask(r, g, b, a);
    },
    compileShader(shader) {
        instance.gl.compileShader(instance.glState.shaders[shader]);
    },
    compressedTexImage2D(target, level, internalformat, width, height, border, data, datalen) {
        const pixels = new DataView(instance.memory.buffer, data, datalen);
        instance.gl.compressedTexImage2D(target, level, internalformat, width, height, border, pixels);
    },
    compressedTexSubImage2D(target, level, internalformat, xoff, yoff, width, height, format, data, datalen) {
        const pixels = new DataView(instance.memory.buffer, data, datalen);
        instance.gl.compressedSubTexImage2D(target, level, internalformat, xoff, yoff, width, height, format, pixels);
    },
    copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size) {
        instance.gl.copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size);
    },
    copyTexImage2D(target, level, internalformat, x, y, width, height, border) {
        instance.gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
    },
    copyTexSubImage2D(target, level, xoff, yoff, x, y, width, height) {
        instance.gl.copyTexSubImage2D(target, level, xoff, yoff, x, y, width, height);
    },
    createBuffer() {
        const buf = instance.gl.createBuffer();
        if (buf == null) return -1;

        instance.glState.buffers.push(buf);
        return instance.glState.buffers.length - 1;
    },
    createFramebuffer() {
        const buf = instance.gl.createFramebuffer();
        if (buf == null) return -1;

        instance.glState.framebuffers.push(buf);
        return instance.glState.framebuffers.length - 1;
    },
    createProgram() {
        const prog = instance.gl.createProgram();
        if (prog == null) return -1;

        instance.glState.programs.push(prog);
        return instance.glState.programs.length - 1;
    },
    createRenderbuffer() {
        const buf = instance.gl.createRenderbuffer();
        if (buf == null) return -1;

        instance.glState.renderbuffers.push(buf);
        return instance.glState.renderbuffers.length - 1;
    },
    createShader(type) {
        const shader = instance.gl.createShader(type);
        if (shader == null) return -1;

        instance.glState.shaders.push(shader);
        return instance.glState.shaders.length - 1;
    },
    createTexture() {
        const texture = instance.gl.createTexture();
        if (texture == null) return -1;

        instance.glState.textures.push(texture);
        return instance.glState.textures.length - 1;
    },
    createVertexArray() {
        const vao = instance.gl.createVertexArray();
        if (vao == null) return -1;

        instance.glState.vertexArrays.push(vao);
        return instance.glState.vertexArrays.length - 1;
    },
    cullFace(mode) {
        instance.gl.cullFace(mode);
    },
    deleteBuffer(buffer) {
        instance.gl.deleteBuffer(instance.glState.buffers[buffer]);
    },
    deleteFramebuffer(framebuffer) {
        instance.gl.deleteFramebuffer(instance.glState.framebuffers[framebuffer]);
    },
    deleteProgram(program) {
        instance.gl.deleteProgram(instance.glState.programs[program]);
    },
    deleteRenderbuffer(renderbuffer) {
        instance.gl.deleteRenderbuffer(instance.glState.renderbuffers[renderbuffer]);
    },
    deleteShader(shader) {
        instance.gl.deleteShader(instance.glState.shaders[shader]);
    },
    deleteTexture(texture) {
        instance.gl.deleteTexture(instance.glState.textures[texture]);
    },
    deleteVertexArray(vertexArray) {
        instance.gl.deleteVertexArray(instance.glState.vertexArrays[vertexArray]);
    },
    depthFunc(func) {
        instance.gl.depthFunc(func);
    },
    depthMask(flag) {
        instance.gl.depthMask(flag);
    },
    depthRange(znear, zfar) {
        instance.gl.depthRange(znear, zfar);
    },
    detachShader(program, shader) {
        instance.gl.detachShader(instance.glState.programs[program], instance.glState.shaders[shader]);
    },
    disable(cap) {
        instance.gl.disable(cap);
    },
    disableVertexAttribArray(index) {
        instance.gl.disableVertexAttribArray(index);
    },
    drawArrays(mode, first, count) {
        instance.gl.drawArrays(mode, first, count);
    },
    drawArraysInstanced(mode, first, count, instanceCount) {
        instance.gl.drawArraysInstanced(mode, first, count, instanceCount);
    },
    drawElements(mode, count, type, offset) {
        instance.gl.drawElements(mode, count, type, offset);
    },
    drawElementsInstanced(mode, count, type, offset, instanceCount) {
        instance.gl.drawElementsInstanced(mode, count, type, offset, instanceCount);
    },
    drawRangeElements(mode, start, end, count, type, offset) {
        instance.gl.drawRangeElements(mode, start, end, count, type, offset);
    },
    enable(cap) {
        instance.gl.enable(cap);
    },
    enableVertexAttribArray(index) {
        instance.gl.enableVertexAttribArray(index);
    },
    finish() {
        instance.gl.finish();
    },
    flush() {
        instance.gl.flush();
    },
    framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
        instance.gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, instance.glState.renderbuffers[renderbuffer]);
    },
    framebufferTexture2D(target, attachment, texttarget, texture, level) {
        instance.gl.framebufferTexture2D(target, attachment, texttarget, instance.glState.textures[texture], level);
    },
    framebufferTextureLayer(target, attachment, texture, level, layer) {
        instance.gl.framebufferTextureLayer(target, attachment, instance.glState.textures[texture], level, layer);
    },
    frontFace(mode) {
        instance.gl.frontFace(mode);
    },
    generateMipmap(target) {
        instance.gl.generateMipmap(target);
    },
    getActiveAttrib(program, index) {
        const loc = instance.gl.getActiveAttrib(instance.glState.programs[program], index);
        return instance.store_value(loc);
    },
    getActiveUniform(program, index) {
        const loc = instance.gl.getActiveUniform(instance.glState.programs[program], index);
        return instance.store_value(loc);
    },
    getActiveUniformBlockName(program, index) {
        const name = instance.gl.getActiveUniformBlockName(instance.glState.programs[program], index);
        return instance.store_value(name);
    },
    getActiveUniformBlockParameter(program, index, pname) {
        const param = instance.gl.getActiveUniformBlockParameter(instance.glState.programs[program], index, pname);
        return instance.store_value(param);
    },
    getActiveUniforms(program, indicies, pname) {
        const loc = instance.gl.getActiveUniforms(instance.glState.programs[program], indicies, pname);
        return instance.store_value(loc);
    },
    getAttachedShaders(program) {
        return instance.store_value(
            instance.gl.getAttachedShaders(instance.glState.programs[program])
        );
    },
    getAttribLocation(program, name, namelen) {
        const attribname = instance.extract_string(name, namelen);

        return instance.gl.getAttribLocation(instance.glState.programs[program], attribname);
    },
    getBufferParameter(target, pname) {
        return instance.store_value(
            instance.gl.getBufferParameter(target, pname)
        );
    },
    getBufferSubData(target, srcbyteoffset, dstbufferdata, dstbufferlen, dstoffset, length) {
        const dst = new DataView(instance.memory.buffer, dstbufferdata, dstbufferlen);
        instance.gl.getBufferSubData(target, srcbyteoffset, dst, dstoffset, length);
    },
    getContextAttributes() {
        return instance.store_value(instance.gl.getContextAttributes());
    },
    getError() {
        return instance.gl.getError();
    },
    getExtension(nameptr, namelen) {
        return instance.store_value(instance.gl.getExtension(
            instance.extract_string(nameptr, namelen)
        ));
    },
    getFramebufferAttachmentParameter(target, attachment, pname) {
        return instance.store_value(instance.gl.getFramebufferAttachmentParameter(target, attachment, pname));
    },
    getInternalformatParameter(target, internalformat, pname) {
        return instance.store_value(instance.gl.getInternalformatParameter(target, internalformat, pname));
    },
    getIndexedParameter(target, index) {
        return instance.store_value(instance.gl.getIndexedParameter(target, index));
    },
    getParameter(pname) {
        return instance.store_value(instance.gl.getParameter(pname));
    },
    getRenderbufferParameter(target, internalformat, pname) {
        return instance.store_value(instance.gl.getRenderbufferParameter(target, internalformat, pname));
    },
    getShaderParameter(shader, param) {
        return instance.gl.getShaderParameter(instance.glState.shaders[shader], param);
    },
    getShaderInfoLog(shader) {
        return instance.store_value(instance.gl.getShaderInfoLog(instance.glState.shaders[shader]));
    },
    getProgramParameter(program, param) {
        return instance.gl.getProgramParameter(instance.glState.programs[program], param);
    },
    getProgramInfoLog(program) {
        return instance.store_value(instance.gl.getProgramInfoLog(instance.glState.programs[program]));
    },
    getSupportedExtensions() {
        return instance.store_value(instance.gl.getSupportedExtensions());
    },
    getUniform(program, uniform) {
        return instance.store_value(instance.gl.getUniform(
            instance.glState.programs[program],
            instance.glState.uniformlocs[uniform]
        ));
    },
    getUniformBlockIndex(program, nameptr, namelen) {
        return instance.gl.getUniformBlockIndex(instance.glState.programs[program], instance.extract_string(nameptr, namelen));
    },
    getUniformIndicies(program, names) {
        return instance.store_value(instance.gl.getUniformIndicies(
            instance.glState.programs[program],
            names
        ));
    },
    getUniformLocation(program, name, namelen) {
        const uniname = instance.extract_string(name, namelen);

        instance.glState.uniformlocs.push(instance.gl.getUniformLocation(instance.glState.programs[program], uniname));
        return instance.glState.uniformlocs.length - 1;
    },
    getVertexAttrib(index, pname) {
        return instance.store_value(instance.gl.getVertexAttrib(index, pname));
    },
    getVertexAttribOffset(index, pname) {
        return instance.gl.getVertexAttribOffset(index, pname);
    },
    hint(target, mode) {
        instance.gl.hint(target, mode);
    },
    isEnabled(cap) {
        return instance.gl.isEnabled(cap);
    },
    isContextLost() {
        return instance.gl.isContextLost();
    },
    invalidateFramebuffer(target, attachdata, attachlen) {
        const attachments = new Int32Array(instance.memory.buffer, attachdata, attachlen);
        instance.gl.invalidateFramebuffer(target, attachments);
    },
    invalidateSubFramebuffer(target, attachdata, attachlen, x, y, width, height) {
        const attachments = new Int32Array(instance.memory.buffer, attachdata, attachlen);
        instance.gl.invalidateFramebuffer(target, attachments, x, y, width, height);
    },
    lineWidth(width) {
        instance.gl.lineWidth(width);
    },
    linkProgram(program) {
        instance.gl.linkProgram(instance.glState.programs[program]);
    },
    pixelStorei(pname, param) {
        instance.gl.pixelStorei(pname, param);
    },
    polygonOffset(factor, units) {
        instance.gl.polygonOffset(factor, units);
    },
    printProgramInfoLog(program) {
        console.log(instance.gl.getProgramInfoLog(instance.glState.programs[program]));
    },
    printShaderInfoLog(shader) {
        console.log(instance.gl.getShaderInfoLog(instance.glState.shaders[shader]));
    },
    readPixels(x, y, width, height, format, type, pixels, pixelslen) {
        const pixeldata = new Uint8Array(instance.memory.buffer, pixels, pixelslen);
        instance.gl.readPixels(x, y, width, height, format, type, pixeldata);
    },
    readBuffer(src) {
        instance.gl.readBuffer(src);
    },
    renderbufferStorage(target, internalformat, width, height) {
        instance.gl.renderbufferStorage(target, internalformat, width, height);
    },
    renderbufferStorageMultisample(target, samples, internalformat, width, height) {
        instance.gl.renderbufferStorageMultisample(target, samples, internalformat, width, height);
    },
    sampleCoverage(value, invert) {
        instance.gl.sampleCoverage(value, invert);
    },
    scissor(x, y, width, height) {
        instance.gl.scissor(x, y, width, height);
    },
    shaderSource(shader, source, sourcelen) {
        const sourcedata = instance.extract_string(source, sourcelen);

        instance.gl.shaderSource(instance.glState.shaders[shader], sourcedata);
    },
    stencilFunc(func, ref, mask) {
        instance.gl.stencilFunc(func, ref, mask);
    },
    stencilFuncSeparate(face, func, ref, mask) {
        instance.gl.stencilFuncSeparate(face, func, ref, mask);
    },
    stencilMask(mask) {
        instance.gl.stencilMask(mask);
    },
    stencilMaskSeparate(face, mask) {
        instance.gl.stencilMaskSeparate(face, mask);
    },
    stencilOp(fail, zfail, mask) {
        instance.gl.stencilOp(fail, zfail, mask);
    },
    stencilOpSeparate(face, fail, zfail, zpass) {
        instance.gl.stencilOpSeparate(face, fail, zfail, zpass);
    },
    texImage2D(target, level, internalformat, width, height, border, format, type, pixels, pixelslen) {
        const data = new Uint8Array(instance.memory.buffer, pixels, pixelslen);
        instance.gl.texImage2D(target, level, internalformat, width, height, border, format, type, data);
    },
    texParameterf(target, pname, param) {
        instance.gl.texParameterf(target, pname, param);
    },
    texParameteri(target, pname, param) {
        instance.gl.texParameteri(target, pname, param);
    },
    texStorage2D(target, levels, internalformat, width, height) {
        instance.gl.texStorage2D(target, levels, internalformat, width, height);
    },
    texSubImage2D(target, level, xoff, yoff, width, height, format, type, pixels, pixelslen) {
        const data = new Uint8Array(instance.memory.buffer, pixels, pixelslen);
        instance.gl.texSubImage2D(target, level, xoff, yoff, width, height, format, type, data);
    },
    uniform1f(loc, x) {
        instance.gl.uniform1f(instance.glState.uniformlocs[loc], x);
    },
    uniform1i(loc, x) {
        instance.gl.uniform1i(instance.glState.uniformlocs[loc], x);
    },
    uniform2f(loc, x, y) {
        instance.gl.uniform2f(instance.glState.uniformlocs[loc], x, y);
    },
    uniform2i(loc, x, y) {
        instance.gl.uniform2i(instance.glState.uniformlocs[loc], x, y);
    },
    uniform3f(loc, x, y, z) {
        instance.gl.uniform3f(instance.glState.uniformlocs[loc], x, y, z);
    },
    uniform3i(loc, x, y, z) {
        instance.gl.uniform3i(instance.glState.uniformlocs[loc], x, y, z);
    },
    uniform4f(loc, x, y, z, w) {
        instance.gl.uniform4f(instance.glState.uniformlocs[loc], x, y, z, w);
    },
    uniform4i(loc, x, y, z, w) {
        instance.gl.uniform4i(instance.glState.uniformlocs[loc], x, y, z, w);
    },
    uniform1iv(loc, valueptr, valuelen) {
        instance.gl.uniform1iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen));
    },
    uniform1fv(loc, valueptr, valuelen) {
        instance.gl.uniform1fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen));
    },
    uniform2iv(loc, valueptr, valuelen) {
        instance.gl.uniform2iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen * 2));
    },
    uniform2fv(loc, valueptr, valuelen) {
        instance.gl.uniform2fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen * 2));
    },
    uniform3iv(loc, valueptr, valuelen) {
        instance.gl.uniform3iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen * 3));
    },
    uniform3fv(loc, valueptr, valuelen) {
        instance.gl.uniform3fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen * 3));
    },
    uniform4iv(loc, valueptr, valuelen) {
        instance.gl.uniform4iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen * 4));
    },
    uniform4fv(loc, valueptr, valuelen) {
        instance.gl.uniform4fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen * 4));
    },
    uniformBlockBinding(program, index, binding) {
        instance.gl.uniformBlockBinding(instance.glState.programs[program], index, binding);
    },
    uniformMatrix2(loc, transpose, valueptr) {
        const data = new Float32Array(instance.memory.buffer, valueptr, 4);
        instance.gl.uniformMatrix2fv(instance.glState.uniformlocs[loc], transpose, data);
    },
    uniformMatrix3(loc, transpose, valueptr) {
        const data = new Float32Array(instance.memory.buffer, valueptr, 9);
        instance.gl.uniformMatrix3fv(instance.glState.uniformlocs[loc], transpose, data);
    },
    uniformMatrix4(loc, transpose, valueptr) {
        const data = new Float32Array(instance.memory.buffer, valueptr, 16);
        instance.gl.uniformMatrix4fv(instance.glState.uniformlocs[loc], transpose, data);
    },
    useProgram(program) {
        instance.gl.useProgram(instance.glState.programs[program]);
    },
    validateProgram(program) {
        instance.gl.validateProgram(program[program]);
    },
    vertexAttrib1f(idx, x) {
        instance.gl.vertexAttrib1f(idx, x);
    },
    vertexAttrib2f(idx, x, y) {
        instance.gl.vertexAttrib2f(idx, x, y);
    },
    vertexAttrib3f(idx, x, y, z) {
        instance.gl.vertexAttrib3f(idx, x, y, z);
    },
    vertexAttrib4f(idx, x, y, z, w) {
        instance.gl.vertexAttrib4f(idx, x, y, z, w);
    },
    vertexAttribIPointer(idx, size, type, stride, offset) {
        instance.gl.vertexAttribIPointer(idx, size, type, stride, offset);
    },
    vertexAttribPointer(idx, size, type, normalized, stride, offset) {
        instance.gl.vertexAttribPointer(idx, size, type, normalized, stride, offset);
    },
    vertexAttribDivisor(idx, divisor) {
        instance.gl.vertexAttribDivisor(idx, divisor);
    },
    viewport(x, y, width, height) {
        instance.gl.viewport(x, y, width, height);
    },
}));
