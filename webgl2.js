Onyx.register_module("__webgl", instance => ({
    glInit(context) {
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

    glActiveTexture(texture) {
        instance.gl.activeTexture(texture);
    },
    glAttachShader(program, shader) {
        instance.gl.attachShader(instance.glState.programs[program], instance.glState.shaders[shader]);
        return instance.glState.programs[program];
    },
    glBindAttribLocation(program, index, name, namelen) {
        instance.gl.bindAttribLocation(instance.glState.programs[program], index, instance.extract_string(name, namelen));
    },
    glBindBuffer(target, buffer) {
        if (buffer == -1) {
            instance.gl.bindBuffer(target, null);
        } else {
            instance.gl.bindBuffer(target, instance.glState.buffers[buffer]);
        }
    },
    glBindBufferBase(target, index, buffer) {
        if (buffer == -1) {
            instance.gl.bindBufferBase(target, index, null);
        } else {
            instance.gl.bindBufferBase(target, instance.glState.buffers[buffer]);
        }
    },
    glBindBufferRange(target, index, buffer, offset, size) {
        if (buffer == -1) {
            instance.gl.bindBufferRange(target, index, null, offset, size);
        } else {
            instance.gl.bindBufferRange(target, index, instance.glState.buffers[buffer], offset, size);
        }
    },
    glBindFramebuffer(target, framebuffer) {
        if (framebuffer == -1) {
            instance.gl.bindFramebuffer(target, null);
        } else {
            instance.gl.bindFramebuffer(target, instance.glState.framebuffers[framebuffer]);
        }
    },
    glBindRenderbuffer(target, renderbuffer) {
        if (renderbuffer == -1) {
            instance.gl.bindRenderbuffer(target, null);
        } else {
            instance.gl.bindRenderbuffer(target, instance.glState.renderbuffers[renderbuffer]);
        }
    },
    glBindTexture(target, texture) {
        if (texture == -1) {
            instance.gl.bindTexture(target, null);
        } else {
            instance.gl.bindTexture(target, instance.glState.textures[texture]);
        }
    },
    glBindVertexArray(vertexArray) {
        if (vertexArray == -1) {
            instance.gl.bindVertexArray(null);
        } else {
            instance.gl.bindVertexArray(instance.glState.vertexArrays[vertexArray]);
        }
    },
    glBlendColor(red, green, blue, alpha) {
        instance.gl.blendColor(red, green, blue, alpha);
    },
    glBlendEquation(mode) {
        instance.gl.blendEquation(mode);
    },
    glBlendEquationSeparate(modeRGB, modeAlpha) {
        instance.gl.blendEquationSeparate(modeRGB, modeAlpha);
    },
    glBlendFunc(sfactor, dfactor) {
        instance.gl.blendFunc(sfactor, dfactor);
    },
    glBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
        instance.gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
    },
    glBlitFramebuffer(sx0, sy0, sx1, sy1, dx0, dy0, dx1, dy1, mask, filter) {
        instance.gl.blitFramebuffer(sx0, sy0, sx1, sy1, dx0, dy0, dx1, dy1, mask, filter);
    },
    glBufferDataWithData(target, bufferdata, bufferlen, usage) {
        const data = new DataView(instance.memory.buffer, bufferdata, bufferlen);
        instance.gl.bufferData(target, data, usage);
    },
    glBufferDataNoData(target, size, usage) {
        instance.gl.bufferData(target, size, usage);
    },
    glBufferSubData(target, offset, bufferdata, bufferlen) {
        const data = new DataView(instance.memory.buffer, bufferdata, bufferlen);
        instance.gl.bufferSubData(target, offset, data);
    },
    glCheckFramebufferStatus(target) {
        return instance.gl.checkFramebufferStatus(target);
    },
    glClear(bit) {
        instance.gl.clear(bit);
    },
    glClearColor(r, g, b, a) {
        instance.gl.clearColor(r, g, b, a);
    },
    glClearDepth(depth) {
        instance.gl.clearDepth(depth);
    },
    glClearStencil(stencil) {
        instance.gl.clearStencil(stencil);
    },
    glColorMask(r, g, b, a) {
        instance.gl.colorMask(r, g, b, a);
    },
    glCompileShader(shader) {
        instance.gl.compileShader(instance.glState.shaders[shader]);
    },
    glCompressedTexImage2D(target, level, internalformat, width, height, border, data, datalen) {
        const pixels = new DataView(instance.memory.buffer, data, datalen);
        instance.gl.compressedTexImage2D(target, level, internalformat, width, height, border, pixels);
    },
    glCompressedTexSubImage2D(target, level, internalformat, xoff, yoff, width, height, format, data, datalen) {
        const pixels = new DataView(instance.memory.buffer, data, datalen);
        instance.gl.compressedSubTexImage2D(target, level, internalformat, xoff, yoff, width, height, format, pixels);
    },
    glCopyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size) {
        instance.gl.copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size);
    },
    glCopyTexImage2D(target, level, internalformat, x, y, width, height, border) {
        instance.gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
    },
    glCopyTexSubImage2D(target, level, xoff, yoff, x, y, width, height) {
        instance.gl.copyTexSubImage2D(target, level, xoff, yoff, x, y, width, height);
    },
    glCreateBuffer() {
        const buf = instance.gl.createBuffer();
        if (buf == null) return -1;

        instance.glState.buffers.push(buf);
        return instance.glState.buffers.length - 1;
    },
    glCreateFramebuffer() {
        const buf = instance.gl.createFramebuffer();
        if (buf == null) return -1;

        instance.glState.framebuffers.push(buf);
        return instance.glState.framebuffers.length - 1;
    },
    glCreateProgram() {
        const prog = instance.gl.createProgram();
        if (prog == null) return -1;

        instance.glState.programs.push(prog);
        return instance.glState.programs.length - 1;
    },
    glCreateRenderbuffer() {
        const buf = instance.gl.createRenderbuffer();
        if (buf == null) return -1;

        instance.glState.renderbuffers.push(buf);
        return instance.glState.renderbuffers.length - 1;
    },
    glCreateShader(type) {
        const shader = instance.gl.createShader(type);
        if (shader == null) return -1;

        instance.glState.shaders.push(shader);
        return instance.glState.shaders.length - 1;
    },
    glCreateTexture() {
        const texture = instance.gl.createTexture();
        if (texture == null) return -1;

        instance.glState.textures.push(texture);
        return instance.glState.textures.length - 1;
    },
    glCreateVertexArray() {
        const vao = instance.gl.createVertexArray();
        if (vao == null) return -1;

        instance.glState.vertexArrays.push(vao);
        return instance.glState.vertexArrays.length - 1;
    },
    glCullFace(mode) {
        instance.gl.cullFace(mode);
    },
    glDeleteBuffer(buffer) {
        instance.gl.deleteBuffer(instance.glState.buffers[buffer]);
    },
    glDeleteFramebuffer(framebuffer) {
        instance.gl.deleteFramebuffer(instance.glState.framebuffers[framebuffer]);
    },
    glDeleteProgram(program) {
        instance.gl.deleteProgram(instance.glState.programs[program]);
    },
    glDeleteRenderbuffer(renderbuffer) {
        instance.gl.deleteRenderbuffer(instance.glState.renderbuffers[renderbuffer]);
    },
    glDeleteShader(shader) {
        instance.gl.deleteShader(instance.glState.shaders[shader]);
    },
    glDeleteTexture(texture) {
        instance.gl.deleteTexture(instance.glState.textures[texture]);
    },
    glDeleteVertexArray(vertexArray) {
        instance.gl.deleteVertexArray(instance.glState.vertexArrays[vertexArray]);
    },
    glDepthFunc(func) {
        instance.gl.depthFunc(func);
    },
    glDepthMask(flag) {
        instance.gl.depthMask(flag);
    },
    glDepthRange(znear, zfar) {
        instance.gl.depthRange(znear, zfar);
    },
    glDetachShader(program, shader) {
        instance.gl.detachShader(instance.glState.programs[program], instance.glState.shaders[shader]);
    },
    glDisable(cap) {
        instance.gl.disable(cap);
    },
    glDisableVertexAttribArray(index) {
        instance.gl.disableVertexAttribArray(index);
    },
    glDrawArrays(mode, first, count) {
        instance.gl.drawArrays(mode, first, count);
    },
    glDrawArraysInstanced(mode, first, count, instanceCount) {
        instance.gl.drawArraysInstanced(mode, first, count, instanceCount);
    },
    glDrawElements(mode, count, type, offset) {
        instance.gl.drawElements(mode, count, type, offset);
    },
    glDrawElementsInstanced(mode, count, type, offset, instanceCount) {
        instance.gl.drawElementsInstanced(mode, count, type, offset, instanceCount);
    },
    glDrawRangeElements(mode, start, end, count, type, offset) {
        instance.gl.drawRangeElements(mode, start, end, count, type, offset);
    },
    glEnable(cap) {
        instance.gl.enable(cap);
    },
    glEnableVertexAttribArray(index) {
        instance.gl.enableVertexAttribArray(index);
    },
    glFinish() {
        instance.gl.finish();
    },
    glFlush() {
        instance.gl.flush();
    },
    glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
        instance.gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, instance.glState.renderbuffers[renderbuffer]);
    },
    glFramebufferTexture2D(target, attachment, texttarget, texture, level) {
        instance.gl.framebufferTexture2D(target, attachment, texttarget, instance.glState.textures[texture], level);
    },
    glFramebufferTextureLayer(target, attachment, texture, level, layer) {
        instance.gl.framebufferTextureLayer(target, attachment, instance.glState.textures[texture], level, layer);
    },
    glFrontFace(mode) {
        instance.gl.frontFace(mode);
    },
    glGenerateMipmap(target) {
        instance.gl.generateMipmap(target);
    },
    glGetActiveAttrib(program, index) {
        const loc = instance.gl.getActiveAttrib(instance.glState.programs[program], index);
        return instance.store_value(loc);
    },
    glGetActiveUniform(program, index) {
        const loc = instance.gl.getActiveUniform(instance.glState.programs[program], index);
        return instance.store_value(loc);
    },
    glGetActiveUniformBlockName(program, index) {
        const name = instance.gl.getActiveUniformBlockName(instance.glState.programs[program], index);
        return instance.store_value(name);
    },
    glGetActiveUniformBlockParameter(program, index, pname) {
        const param = instance.gl.getActiveUniformBlockParameter(instance.glState.programs[program], index, pname);
        return instance.store_value(param);
    },
    glGetActiveUniforms(program, indicies, pname) {
        const loc = instance.gl.getActiveUniforms(instance.glState.programs[program], indicies, pname);
        return instance.store_value(loc);
    },
    glGetAttachedShaders(program) {
        return instance.store_value(
            instance.gl.getAttachedShaders(instance.glState.programs[program])
        );
    },
    glGetAttribLocation(program, name, namelen) {
        const attribname = instance.extract_string(name, namelen);

        return instance.gl.getAttribLocation(instance.glState.programs[program], attribname);
    },
    glGetBufferParameter(target, pname) {
        return instance.store_value(
            instance.gl.getBufferParameter(target, pname)
        );
    },
    glGetBufferSubData(target, srcbyteoffset, dstbufferdata, dstbufferlen, dstoffset, length) {
        const dst = new DataView(instance.memory.buffer, dstbufferdata, dstbufferlen);
        instance.gl.getBufferSubData(target, srcbyteoffset, dst, dstoffset, length);
    },
    glGetContextAttributes() {
        return instance.store_value(instance.gl.getContextAttributes());
    },
    glGetError() {
        return instance.gl.getError();
    },
    glGetExtension(nameptr, namelen) {
        return instance.store_value(instance.gl.getExtension(
            instance.extract_string(nameptr, namelen)
        ));
    },
    glGetFramebufferAttachmentParameter(target, attachment, pname) {
        return instance.store_value(instance.gl.getFramebufferAttachmentParameter(target, attachment, pname));
    },
    glGetInternalformatParameter(target, internalformat, pname) {
        return instance.store_value(instance.gl.getInternalformatParameter(target, internalformat, pname));
    },
    glGetIndexedParameter(target, index) {
        return instance.store_value(instance.gl.getIndexedParameter(target, index));
    },
    glGetParameter(pname) {
        return instance.store_value(instance.gl.getParameter(pname));
    },
    glGetRenderbufferParameter(target, internalformat, pname) {
        return instance.store_value(instance.gl.getRenderbufferParameter(target, internalformat, pname));
    },
    glGetShaderParameter(shader, param) {
        return instance.gl.getShaderParameter(instance.glState.shaders[shader], param);
    },
    glGetShaderInfoLog(shader) {
        return instance.store_value(instance.gl.getShaderInfoLog(instance.glState.shaders[shader]));
    },
    glGetProgramParameter(program, param) {
        return instance.gl.getProgramParameter(instance.glState.programs[program], param);
    },
    glGetProgramInfoLog(program) {
        return instance.store_value(instance.gl.getProgramInfoLog(instance.glState.programs[program]));
    },
    glGetSupportedExtensions() {
        return instance.store_value(instance.gl.getSupportedExtensions());
    },
    glGetUniform(program, uniform) {
        return instance.store_value(instance.gl.getUniform(
            instance.glState.programs[program],
            instance.glState.uniformlocs[uniform]
        ));
    },
    glGetUniformBlockIndex(program, nameptr, namelen) {
        return instance.gl.getUniformBlockIndex(instance.glState.programs[program], instance.extract_string(nameptr, namelen));
    },
    glGetUniformIndicies(program, names) {
        return instance.store_value(instance.gl.getUniformIndicies(
            instance.glState.programs[program],
            names
        ));
    },
    glGetUniformLocation(program, name, namelen) {
        const uniname = instance.extract_string(name, namelen);

        instance.glState.uniformlocs.push(instance.gl.getUniformLocation(instance.glState.programs[program], uniname));
        return instance.glState.uniformlocs.length - 1;
    },
    glGetVertexAttrib(index, pname) {
        return instance.store_value(instance.gl.getVertexAttrib(index, pname));
    },
    glGetVertexAttribOffset(index, pname) {
        return instance.gl.getVertexAttribOffset(index, pname);
    },
    glHint(target, mode) {
        instance.gl.hint(target, mode);
    },
    glIsEnabled(cap) {
        return instance.gl.isEnabled(cap);
    },
    glIsContextLost() {
        return instance.gl.isContextLost();
    },
    glInvalidateFramebuffer(target, attachdata, attachlen) {
        const attachments = new Int32Array(instance.memory.buffer, attachdata, attachlen);
        instance.gl.invalidateFramebuffer(target, attachments);
    },
    glInvalidateSubFramebuffer(target, attachdata, attachlen, x, y, width, height) {
        const attachments = new Int32Array(instance.memory.buffer, attachdata, attachlen);
        instance.gl.invalidateFramebuffer(target, attachments, x, y, width, height);
    },
    glLineWidth(width) {
        instance.gl.lineWidth(width);
    },
    glLinkProgram(program) {
        instance.gl.linkProgram(instance.glState.programs[program]);
    },
    glPixelStorei(pname, param) {
        instance.gl.pixelStorei(pname, param);
    },
    glPolygonOffset(factor, units) {
        instance.gl.polygonOffset(factor, units);
    },
    glPrintProgramInfoLog(program) {
        console.log(instance.gl.getProgramInfoLog(instance.glState.programs[program]));
    },
    glPrintShaderInfoLog(shader) {
        console.log(instance.gl.getShaderInfoLog(instance.glState.shaders[shader]));
    },
    glReadPixels(x, y, width, height, format, type, pixels, pixelslen) {
        const pixeldata = new Uint8Array(instance.memory.buffer, pixels, pixelslen);
        instance.gl.readPixels(x, y, width, height, format, type, pixeldata);
    },
    glReadBuffer(src) {
        instance.gl.readBuffer(src);
    },
    glRenderbufferStorage(target, internalformat, width, height) {
        instance.gl.renderbufferStorage(target, internalformat, width, height);
    },
    glRenderbufferStorageMultisample(target, samples, internalformat, width, height) {
        instance.gl.renderbufferStorageMultisample(target, samples, internalformat, width, height);
    },
    glSampleCoverage(value, invert) {
        instance.gl.sampleCoverage(value, invert);
    },
    glScissor(x, y, width, height) {
        instance.gl.scissor(x, y, width, height);
    },
    glShaderSource(shader, source, sourcelen) {
        const sourcedata = instance.extract_string(source, sourcelen);

        instance.gl.shaderSource(instance.glState.shaders[shader], sourcedata);
    },
    glStencilFunc(func, ref, mask) {
        instance.gl.stencilFunc(func, ref, mask);
    },
    glStencilFuncSeparate(face, func, ref, mask) {
        instance.gl.stencilFuncSeparate(face, func, ref, mask);
    },
    glStencilMask(mask) {
        instance.gl.stencilMask(mask);
    },
    glStencilMaskSeparate(face, mask) {
        instance.gl.stencilMaskSeparate(face, mask);
    },
    glStencilOp(fail, zfail, mask) {
        instance.gl.stencilOp(fail, zfail, mask);
    },
    glStencilOpSeparate(face, fail, zfail, zpass) {
        instance.gl.stencilOpSeparate(face, fail, zfail, zpass);
    },
    glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels, pixelslen) {
        const data = new Uint8Array(instance.memory.buffer, pixels, pixelslen);
        instance.gl.texImage2D(target, level, internalformat, width, height, border, format, type, data);
    },
    glTexParameterf(target, pname, param) {
        instance.gl.texParameterf(target, pname, param);
    },
    glTexParameteri(target, pname, param) {
        instance.gl.texParameteri(target, pname, param);
    },
    glTexStorage2D(target, levels, internalformat, width, height) {
        instance.gl.texStorage2D(target, levels, internalformat, width, height);
    },
    glTexSubImage2D(target, level, xoff, yoff, width, height, format, type, pixels, pixelslen) {
        const data = new Uint8Array(instance.memory.buffer, pixels, pixelslen);
        instance.gl.texSubImage2D(target, level, xoff, yoff, width, height, format, type, data);
    },
    glUniform1f(loc, x) {
        instance.gl.uniform1f(instance.glState.uniformlocs[loc], x);
    },
    glUniform1i(loc, x) {
        instance.gl.uniform1i(instance.glState.uniformlocs[loc], x);
    },
    glUniform2f(loc, x, y) {
        instance.gl.uniform2f(instance.glState.uniformlocs[loc], x, y);
    },
    glUniform2i(loc, x, y) {
        instance.gl.uniform2i(instance.glState.uniformlocs[loc], x, y);
    },
    glUniform3f(loc, x, y, z) {
        instance.gl.uniform3f(instance.glState.uniformlocs[loc], x, y, z);
    },
    glUniform3i(loc, x, y, z) {
        instance.gl.uniform3i(instance.glState.uniformlocs[loc], x, y, z);
    },
    glUniform4f(loc, x, y, z, w) {
        instance.gl.uniform4f(instance.glState.uniformlocs[loc], x, y, z, w);
    },
    glUniform4i(loc, x, y, z, w) {
        instance.gl.uniform4i(instance.glState.uniformlocs[loc], x, y, z, w);
    },
    glUniform1iv(loc, valueptr, valuelen) {
        instance.gl.uniform1iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen));
    },
    glUniform1fv(loc, valueptr, valuelen) {
        instance.gl.uniform1fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen));
    },
    glUniform2iv(loc, valueptr, valuelen) {
        instance.gl.uniform2iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen * 2));
    },
    glUniform2fv(loc, valueptr, valuelen) {
        instance.gl.uniform2fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen * 2));
    },
    glUniform3iv(loc, valueptr, valuelen) {
        instance.gl.uniform3iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen * 3));
    },
    glUniform3fv(loc, valueptr, valuelen) {
        instance.gl.uniform3fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen * 3));
    },
    glUniform4iv(loc, valueptr, valuelen) {
        instance.gl.uniform4iv(instance.glState.uniformlocs[loc], new Int32Array(instance.memory.buffer, valueptr, valuelen * 4));
    },
    glUniform4fv(loc, valueptr, valuelen) {
        instance.gl.uniform4fv(instance.glState.uniformlocs[loc], new Float32Array(instance.memory.buffer, valueptr, valuelen * 4));
    },
    glUniformBlockBinding(program, index, binding) {
        instance.gl.uniformBlockBinding(instance.glState.programs[program], index, binding);
    },
    glUniformMatrix2(loc, transpose, valueptr) {
        const data = new Float32Array(instance.memory.buffer, valueptr, 4);
        instance.gl.uniformMatrix2fv(instance.glState.uniformlocs[loc], transpose, data);
    },
    glUniformMatrix3(loc, transpose, valueptr) {
        const data = new Float32Array(instance.memory.buffer, valueptr, 9);
        instance.gl.uniformMatrix3fv(instance.glState.uniformlocs[loc], transpose, data);
    },
    glUniformMatrix4(loc, transpose, valueptr) {
        const data = new Float32Array(instance.memory.buffer, valueptr, 16);
        instance.gl.uniformMatrix4fv(instance.glState.uniformlocs[loc], transpose, data);
    },
    glUseProgram(program) {
        instance.gl.useProgram(instance.glState.programs[program]);
    },
    glValidateProgram(program) {
        instance.gl.validateProgram(program[program]);
    },
    glVertexAttrib1f(idx, x) {
        instance.gl.vertexAttrib1f(idx, x);
    },
    glVertexAttrib2f(idx, x, y) {
        instance.gl.vertexAttrib2f(idx, x, y);
    },
    glVertexAttrib3f(idx, x, y, z) {
        instance.gl.vertexAttrib3f(idx, x, y, z);
    },
    glVertexAttrib4f(idx, x, y, z, w) {
        instance.gl.vertexAttrib4f(idx, x, y, z, w);
    },
    glVertexAttribIPointer(idx, size, type, stride, offset) {
        instance.gl.vertexAttribIPointer(idx, size, type, stride, offset);
    },
    glVertexAttribPointer(idx, size, type, normalized, stride, offset) {
        instance.gl.vertexAttribPointer(idx, size, type, normalized, stride, offset);
    },
    glVertexAttribDivisor(idx, divisor) {
        instance.gl.vertexAttribDivisor(idx, divisor);
    },
    glViewport(x, y, width, height) {
        instance.gl.viewport(x, y, width, height);
    },
}));
