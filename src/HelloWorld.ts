import { getLoggerFor, Initializer } from '@solid/community-server';
import { AccountLoginStorage } from '@solid/community-server';

export const HELLO_STORAGE_TYPE = 'hello';
export const HELLO_STORAGE_DESCRIPTION = {
  hello: 'string',
} as const;

/**
 * An {@link Initializer} that logs an informative message during startup.
 */
export class HelloWorld extends Initializer {
  protected readonly logger = getLoggerFor(this);

  private readonly storage: AccountLoginStorage<{ [HELLO_STORAGE_TYPE]: typeof HELLO_STORAGE_DESCRIPTION }>;

  // Wrong typings to prevent Components.js typing issues
  public constructor(storage: AccountLoginStorage<Record<string, never>>) {
    super();
    this.storage = storage as unknown as typeof this.storage;
  }

  public async handle(input: void): Promise<void> {
    this.logger.info('HELLO WORLD!');
  }
}
