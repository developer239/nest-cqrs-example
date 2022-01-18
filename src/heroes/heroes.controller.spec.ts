import { HeroesGameController } from './heroes.controller';
import { Test } from '@nestjs/testing';
import { HeroesGameModule } from './heroes.module';

describe('HeroesGameController', () => {
  let controllerToTest: HeroesGameController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HeroesGameModule],
    }).compile();

    controllerToTest =
      moduleRef.get<HeroesGameController>(HeroesGameController);
  });

  describe('findAll', () => {
    it('should return an array of Heroes', async () => {
      expect(await controllerToTest.findAll()).toBe([]);
    });
  });
});
