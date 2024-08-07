import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import { UserService } from './user.service';
import { mockResponse } from '../mocks/user.mock';

describe('UserService', () => {
  describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [UserService],
      });
      service = TestBed.inject(UserService);
      httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should fetch users with correct query parameters', () => {
      const url =
        'https://65009f9718c34dee0cd53786.mockapi.io/users?page=1&limit=5';

      service.getUsers(1, 5).subscribe((response) => {
        expect(response.data.length).toBe(3);
        expect(response.totalItems).toBe(18);
        expect(response.data).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(url);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should handle an empty response correctly', () => {
      const mockResponse: User[] = [];

      service.getUsers(2, 5).subscribe((response) => {
        expect(response.data.length).toBe(0);
        expect(response.totalItems).toBe(0);
      });

      const req = httpMock.expectOne(
        (req) =>
          req.url === 'https://65009f9718c34dee0cd53786.mockapi.io/users' &&
          req.params.get('page') === '2' &&
          req.params.get('limit') === '5',
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });
});
