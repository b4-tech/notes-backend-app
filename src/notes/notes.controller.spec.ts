import { Test, TestingModule } from '@nestjs/testing';
import { NotesController } from './notes.controller';

describe('NotesController', () => {
  let controller: NotesController;
  let testingModule: TestingModule;

  beforeEach(async () => {
    testingModule = await setupTestingModule();
    controller = testingModule.get<NotesController>(NotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

async function setupTestingModule(): Promise<TestingModule> {
  return Test.createTestingModule({
    controllers: [NotesController],
  }).compile();
}