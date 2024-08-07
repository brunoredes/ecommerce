import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../models/user';
import { UserService } from './user.service';
const mockResponse: User[] = [
  {
    createdAt: '2024-03-04T15:57:24.149Z',
    name: 'Frankie Legros',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/130.jpg',
    email: 'Floy.Dach32@gmail.com',
    biography:
      'Distinctio odit autem. Magni porro nisi distinctio rem. Rem neque ex est impedit ipsum adipisci aspernatur rerum. Nihil placeat autem mollitia optio. Temporibus architecto fuga dolorem ex nobis id et nam quas. Iure ipsa laborum incidunt eligendi nemo eum deleniti.',
    id: '16',
  },
  {
    createdAt: '2024-03-04T14:46:35.638Z',
    name: 'Micheal Mertz Jr.',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/446.jpg',
    email: 'Keely.Okuneva68@gmail.com',
    biography:
      'Voluptates necessitatibus quis beatae aspernatur officiis ullam. Assumenda exercitationem quaerat dolore nihil harum repudiandae nemo. Delectus vero fugiat repudiandae omnis unde in.',
    id: '17',
  },
  {
    createdAt: '2024-03-04T09:47:14.090Z',
    name: 'Eduardo Crona',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/787.jpg',
    email: 'Queen_Effertz63@gmail.com',
    biography:
      'Placeat similique praesentium unde cum ipsa ratione numquam blanditiis. Earum odio ducimus quis. Ab tempore sed dolor dolorem ipsa dignissimos cum repellat atque. Debitis ipsum tempora similique impedit ipsum eius ad consequatur dolores.',
    id: '18',
  },
];
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
