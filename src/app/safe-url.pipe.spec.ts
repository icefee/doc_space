import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { inject } from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new SafeUrlPipe(sanitizer);
    expect(pipe).toBeTruthy();
  }))
});
