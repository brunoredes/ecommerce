import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService],
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set loading to true for a given URL', () => {
    const url = '/test-url';
    service.setLoading(true, url);
    expect(service.loadingMap.get(url)).toBe(true);
    expect(service.loading()).toBe(true);
  });

  it('should set loading to false for a given URL', () => {
    const url = '/test-url';
    service.setLoading(true, url);
    service.setLoading(false, url);
    expect(service.loadingMap.has(url)).toBe(false);
    expect(service.loading()).toBe(false);
  });

  it('should throw an error if URL is not provided', () => {
    expect(() => service.setLoading(true, '')).toThrowError(
      `The request URL must be provided to the LoadingService setLoading function`,
    );
  });

  it('should maintain loading state correctly for multiple URLs', () => {
    const url1 = '/test-url-1';
    const url2 = '/test-url-2';

    service.setLoading(true, url1);
    service.setLoading(true, url2);
    expect(service.loading()).toBe(true);

    service.setLoading(false, url1);
    expect(service.loading()).toBe(true);

    service.setLoading(false, url2);
    expect(service.loading()).toBe(false);
  });
});
