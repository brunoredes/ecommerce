import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  let service: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageService);

    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setItem', () => {
    it('should set item in localStorage', () => {
      const key = 'testKey';
      const value = 'testValue';

      service.setItem(key, value);
      expect(localStorage.getItem(key)).toBe(value);
    });
  });

  describe('getItem', () => {
    it('should get item from localStorage', () => {
      const key = 'testKey';
      const value = 'testValue';
      localStorage.setItem(key, value);

      expect(service.getItem(key)).toBe(value);
    });

    it('should return null if key does not exist in localStorage', () => {
      const key = 'nonExistentKey';

      expect(service.getItem(key)).toBeNull();
    });
  });

  describe('removeItem', () => {
    it('should remove item from localStorage', () => {
      const key = 'testKey';
      localStorage.setItem(key, 'testValue');

      service.removeItem(key);
      expect(localStorage.getItem(key)).toBeNull();
    });
  });

  describe('clear', () => {
    it('should clear all items from localStorage', () => {
      localStorage.setItem('key1', 'value1');
      localStorage.setItem('key2', 'value2');

      service.clear();
      expect(localStorage.getItem('key1')).toBeNull();
      expect(localStorage.getItem('key2')).toBeNull();
    });
  });
});
