import { TestBed, inject } from '@angular/core/testing';

import { PostsUserService } from './posts-user.service';

describe('PostsUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsUserService]
    });
  });

  it('should be created', inject([PostsUserService], (service: PostsUserService) => {
    expect(service).toBeTruthy();
  }));
});
