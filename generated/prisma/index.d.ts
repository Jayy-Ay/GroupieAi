
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Chatroom
 * 
 */
export type Chatroom = $Result.DefaultSelection<Prisma.$ChatroomPayload>
/**
 * Model AI
 * 
 */
export type AI = $Result.DefaultSelection<Prisma.$AIPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SenderType: {
  user: 'user',
  ai: 'ai'
};

export type SenderType = (typeof SenderType)[keyof typeof SenderType]

}

export type SenderType = $Enums.SenderType

export const SenderType: typeof $Enums.SenderType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatroom`: Exposes CRUD operations for the **Chatroom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chatrooms
    * const chatrooms = await prisma.chatroom.findMany()
    * ```
    */
  get chatroom(): Prisma.ChatroomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aI`: Exposes CRUD operations for the **AI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIS
    * const aIS = await prisma.aI.findMany()
    * ```
    */
  get aI(): Prisma.AIDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Chatroom: 'Chatroom',
    AI: 'AI',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "chatroom" | "aI" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Chatroom: {
        payload: Prisma.$ChatroomPayload<ExtArgs>
        fields: Prisma.ChatroomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatroomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatroomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          findFirst: {
            args: Prisma.ChatroomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatroomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          findMany: {
            args: Prisma.ChatroomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>[]
          }
          create: {
            args: Prisma.ChatroomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          createMany: {
            args: Prisma.ChatroomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatroomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>[]
          }
          delete: {
            args: Prisma.ChatroomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          update: {
            args: Prisma.ChatroomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          deleteMany: {
            args: Prisma.ChatroomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatroomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatroomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>[]
          }
          upsert: {
            args: Prisma.ChatroomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatroomPayload>
          }
          aggregate: {
            args: Prisma.ChatroomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatroom>
          }
          groupBy: {
            args: Prisma.ChatroomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatroomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatroomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatroomCountAggregateOutputType> | number
          }
        }
      }
      AI: {
        payload: Prisma.$AIPayload<ExtArgs>
        fields: Prisma.AIFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>
          }
          findFirst: {
            args: Prisma.AIFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>
          }
          findMany: {
            args: Prisma.AIFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>[]
          }
          create: {
            args: Prisma.AICreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>
          }
          createMany: {
            args: Prisma.AICreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AICreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>[]
          }
          delete: {
            args: Prisma.AIDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>
          }
          update: {
            args: Prisma.AIUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>
          }
          deleteMany: {
            args: Prisma.AIDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>[]
          }
          upsert: {
            args: Prisma.AIUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPayload>
          }
          aggregate: {
            args: Prisma.AIAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAI>
          }
          groupBy: {
            args: Prisma.AIGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIGroupByOutputType>[]
          }
          count: {
            args: Prisma.AICountArgs<ExtArgs>
            result: $Utils.Optional<AICountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    chatroom?: ChatroomOmit
    aI?: AIOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chatrooms: number
    ownedRooms: number
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatrooms?: boolean | UserCountOutputTypeCountChatroomsArgs
    ownedRooms?: boolean | UserCountOutputTypeCountOwnedRoomsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type ChatroomCountOutputType
   */

  export type ChatroomCountOutputType = {
    userParticipants: number
    aiParticipants: number
    messages: number
  }

  export type ChatroomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userParticipants?: boolean | ChatroomCountOutputTypeCountUserParticipantsArgs
    aiParticipants?: boolean | ChatroomCountOutputTypeCountAiParticipantsArgs
    messages?: boolean | ChatroomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatroomCountOutputType
     */
    select?: ChatroomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeCountUserParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeCountAiParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWhereInput
  }

  /**
   * ChatroomCountOutputType without action
   */
  export type ChatroomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Count Type AICountOutputType
   */

  export type AICountOutputType = {
    messages: number
  }

  export type AICountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | AICountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * AICountOutputType without action
   */
  export type AICountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AICountOutputType
     */
    select?: AICountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AICountOutputType without action
   */
  export type AICountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    chatrooms?: boolean | User$chatroomsArgs<ExtArgs>
    ownedRooms?: boolean | User$ownedRoomsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatrooms?: boolean | User$chatroomsArgs<ExtArgs>
    ownedRooms?: boolean | User$ownedRoomsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chatrooms: Prisma.$ChatroomPayload<ExtArgs>[]
      ownedRooms: Prisma.$ChatroomPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatrooms<T extends User$chatroomsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatroomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedRooms<T extends User$ownedRoomsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chatrooms
   */
  export type User$chatroomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    where?: ChatroomWhereInput
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    cursor?: ChatroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * User.ownedRooms
   */
  export type User$ownedRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    where?: ChatroomWhereInput
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    cursor?: ChatroomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Chatroom
   */

  export type AggregateChatroom = {
    _count: ChatroomCountAggregateOutputType | null
    _avg: ChatroomAvgAggregateOutputType | null
    _sum: ChatroomSumAggregateOutputType | null
    _min: ChatroomMinAggregateOutputType | null
    _max: ChatroomMaxAggregateOutputType | null
  }

  export type ChatroomAvgAggregateOutputType = {
    chatroom_id: number | null
    owned_by: number | null
  }

  export type ChatroomSumAggregateOutputType = {
    chatroom_id: number | null
    owned_by: number | null
  }

  export type ChatroomMinAggregateOutputType = {
    chatroom_id: number | null
    title: string | null
    owned_by: number | null
  }

  export type ChatroomMaxAggregateOutputType = {
    chatroom_id: number | null
    title: string | null
    owned_by: number | null
  }

  export type ChatroomCountAggregateOutputType = {
    chatroom_id: number
    title: number
    owned_by: number
    _all: number
  }


  export type ChatroomAvgAggregateInputType = {
    chatroom_id?: true
    owned_by?: true
  }

  export type ChatroomSumAggregateInputType = {
    chatroom_id?: true
    owned_by?: true
  }

  export type ChatroomMinAggregateInputType = {
    chatroom_id?: true
    title?: true
    owned_by?: true
  }

  export type ChatroomMaxAggregateInputType = {
    chatroom_id?: true
    title?: true
    owned_by?: true
  }

  export type ChatroomCountAggregateInputType = {
    chatroom_id?: true
    title?: true
    owned_by?: true
    _all?: true
  }

  export type ChatroomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatroom to aggregate.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chatrooms
    **/
    _count?: true | ChatroomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatroomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatroomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatroomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatroomMaxAggregateInputType
  }

  export type GetChatroomAggregateType<T extends ChatroomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatroom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatroom[P]>
      : GetScalarType<T[P], AggregateChatroom[P]>
  }




  export type ChatroomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatroomWhereInput
    orderBy?: ChatroomOrderByWithAggregationInput | ChatroomOrderByWithAggregationInput[]
    by: ChatroomScalarFieldEnum[] | ChatroomScalarFieldEnum
    having?: ChatroomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatroomCountAggregateInputType | true
    _avg?: ChatroomAvgAggregateInputType
    _sum?: ChatroomSumAggregateInputType
    _min?: ChatroomMinAggregateInputType
    _max?: ChatroomMaxAggregateInputType
  }

  export type ChatroomGroupByOutputType = {
    chatroom_id: number
    title: string
    owned_by: number
    _count: ChatroomCountAggregateOutputType | null
    _avg: ChatroomAvgAggregateOutputType | null
    _sum: ChatroomSumAggregateOutputType | null
    _min: ChatroomMinAggregateOutputType | null
    _max: ChatroomMaxAggregateOutputType | null
  }

  type GetChatroomGroupByPayload<T extends ChatroomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatroomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatroomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatroomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatroomGroupByOutputType[P]>
        }
      >
    >


  export type ChatroomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroom_id?: boolean
    title?: boolean
    owned_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    userParticipants?: boolean | Chatroom$userParticipantsArgs<ExtArgs>
    aiParticipants?: boolean | Chatroom$aiParticipantsArgs<ExtArgs>
    messages?: boolean | Chatroom$messagesArgs<ExtArgs>
    _count?: boolean | ChatroomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type ChatroomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroom_id?: boolean
    title?: boolean
    owned_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type ChatroomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    chatroom_id?: boolean
    title?: boolean
    owned_by?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatroom"]>

  export type ChatroomSelectScalar = {
    chatroom_id?: boolean
    title?: boolean
    owned_by?: boolean
  }

  export type ChatroomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"chatroom_id" | "title" | "owned_by", ExtArgs["result"]["chatroom"]>
  export type ChatroomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    userParticipants?: boolean | Chatroom$userParticipantsArgs<ExtArgs>
    aiParticipants?: boolean | Chatroom$aiParticipantsArgs<ExtArgs>
    messages?: boolean | Chatroom$messagesArgs<ExtArgs>
    _count?: boolean | ChatroomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatroomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatroomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatroomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chatroom"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      userParticipants: Prisma.$UserPayload<ExtArgs>[]
      aiParticipants: Prisma.$AIPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      chatroom_id: number
      title: string
      owned_by: number
    }, ExtArgs["result"]["chatroom"]>
    composites: {}
  }

  type ChatroomGetPayload<S extends boolean | null | undefined | ChatroomDefaultArgs> = $Result.GetResult<Prisma.$ChatroomPayload, S>

  type ChatroomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatroomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatroomCountAggregateInputType | true
    }

  export interface ChatroomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chatroom'], meta: { name: 'Chatroom' } }
    /**
     * Find zero or one Chatroom that matches the filter.
     * @param {ChatroomFindUniqueArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatroomFindUniqueArgs>(args: SelectSubset<T, ChatroomFindUniqueArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chatroom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatroomFindUniqueOrThrowArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatroomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatroomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomFindFirstArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatroomFindFirstArgs>(args?: SelectSubset<T, ChatroomFindFirstArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chatroom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomFindFirstOrThrowArgs} args - Arguments to find a Chatroom
     * @example
     * // Get one Chatroom
     * const chatroom = await prisma.chatroom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatroomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatroomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chatrooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chatrooms
     * const chatrooms = await prisma.chatroom.findMany()
     * 
     * // Get first 10 Chatrooms
     * const chatrooms = await prisma.chatroom.findMany({ take: 10 })
     * 
     * // Only select the `chatroom_id`
     * const chatroomWithChatroom_idOnly = await prisma.chatroom.findMany({ select: { chatroom_id: true } })
     * 
     */
    findMany<T extends ChatroomFindManyArgs>(args?: SelectSubset<T, ChatroomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chatroom.
     * @param {ChatroomCreateArgs} args - Arguments to create a Chatroom.
     * @example
     * // Create one Chatroom
     * const Chatroom = await prisma.chatroom.create({
     *   data: {
     *     // ... data to create a Chatroom
     *   }
     * })
     * 
     */
    create<T extends ChatroomCreateArgs>(args: SelectSubset<T, ChatroomCreateArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chatrooms.
     * @param {ChatroomCreateManyArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatroom = await prisma.chatroom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatroomCreateManyArgs>(args?: SelectSubset<T, ChatroomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chatrooms and returns the data saved in the database.
     * @param {ChatroomCreateManyAndReturnArgs} args - Arguments to create many Chatrooms.
     * @example
     * // Create many Chatrooms
     * const chatroom = await prisma.chatroom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chatrooms and only return the `chatroom_id`
     * const chatroomWithChatroom_idOnly = await prisma.chatroom.createManyAndReturn({
     *   select: { chatroom_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatroomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatroomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chatroom.
     * @param {ChatroomDeleteArgs} args - Arguments to delete one Chatroom.
     * @example
     * // Delete one Chatroom
     * const Chatroom = await prisma.chatroom.delete({
     *   where: {
     *     // ... filter to delete one Chatroom
     *   }
     * })
     * 
     */
    delete<T extends ChatroomDeleteArgs>(args: SelectSubset<T, ChatroomDeleteArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chatroom.
     * @param {ChatroomUpdateArgs} args - Arguments to update one Chatroom.
     * @example
     * // Update one Chatroom
     * const chatroom = await prisma.chatroom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatroomUpdateArgs>(args: SelectSubset<T, ChatroomUpdateArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chatrooms.
     * @param {ChatroomDeleteManyArgs} args - Arguments to filter Chatrooms to delete.
     * @example
     * // Delete a few Chatrooms
     * const { count } = await prisma.chatroom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatroomDeleteManyArgs>(args?: SelectSubset<T, ChatroomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chatrooms
     * const chatroom = await prisma.chatroom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatroomUpdateManyArgs>(args: SelectSubset<T, ChatroomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chatrooms and returns the data updated in the database.
     * @param {ChatroomUpdateManyAndReturnArgs} args - Arguments to update many Chatrooms.
     * @example
     * // Update many Chatrooms
     * const chatroom = await prisma.chatroom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chatrooms and only return the `chatroom_id`
     * const chatroomWithChatroom_idOnly = await prisma.chatroom.updateManyAndReturn({
     *   select: { chatroom_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatroomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatroomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chatroom.
     * @param {ChatroomUpsertArgs} args - Arguments to update or create a Chatroom.
     * @example
     * // Update or create a Chatroom
     * const chatroom = await prisma.chatroom.upsert({
     *   create: {
     *     // ... data to create a Chatroom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chatroom we want to update
     *   }
     * })
     */
    upsert<T extends ChatroomUpsertArgs>(args: SelectSubset<T, ChatroomUpsertArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chatrooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomCountArgs} args - Arguments to filter Chatrooms to count.
     * @example
     * // Count the number of Chatrooms
     * const count = await prisma.chatroom.count({
     *   where: {
     *     // ... the filter for the Chatrooms we want to count
     *   }
     * })
    **/
    count<T extends ChatroomCountArgs>(
      args?: Subset<T, ChatroomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatroomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chatroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatroomAggregateArgs>(args: Subset<T, ChatroomAggregateArgs>): Prisma.PrismaPromise<GetChatroomAggregateType<T>>

    /**
     * Group by Chatroom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatroomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatroomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatroomGroupByArgs['orderBy'] }
        : { orderBy?: ChatroomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatroomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatroomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chatroom model
   */
  readonly fields: ChatroomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chatroom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatroomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userParticipants<T extends Chatroom$userParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, Chatroom$userParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiParticipants<T extends Chatroom$aiParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, Chatroom$aiParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Chatroom$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chatroom$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chatroom model
   */
  interface ChatroomFieldRefs {
    readonly chatroom_id: FieldRef<"Chatroom", 'Int'>
    readonly title: FieldRef<"Chatroom", 'String'>
    readonly owned_by: FieldRef<"Chatroom", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Chatroom findUnique
   */
  export type ChatroomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom findUniqueOrThrow
   */
  export type ChatroomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom findFirst
   */
  export type ChatroomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatrooms.
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatrooms.
     */
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * Chatroom findFirstOrThrow
   */
  export type ChatroomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatroom to fetch.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chatrooms.
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chatrooms.
     */
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * Chatroom findMany
   */
  export type ChatroomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter, which Chatrooms to fetch.
     */
    where?: ChatroomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chatrooms to fetch.
     */
    orderBy?: ChatroomOrderByWithRelationInput | ChatroomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chatrooms.
     */
    cursor?: ChatroomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chatrooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chatrooms.
     */
    skip?: number
    distinct?: ChatroomScalarFieldEnum | ChatroomScalarFieldEnum[]
  }

  /**
   * Chatroom create
   */
  export type ChatroomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * The data needed to create a Chatroom.
     */
    data: XOR<ChatroomCreateInput, ChatroomUncheckedCreateInput>
  }

  /**
   * Chatroom createMany
   */
  export type ChatroomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chatrooms.
     */
    data: ChatroomCreateManyInput | ChatroomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chatroom createManyAndReturn
   */
  export type ChatroomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * The data used to create many Chatrooms.
     */
    data: ChatroomCreateManyInput | ChatroomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chatroom update
   */
  export type ChatroomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * The data needed to update a Chatroom.
     */
    data: XOR<ChatroomUpdateInput, ChatroomUncheckedUpdateInput>
    /**
     * Choose, which Chatroom to update.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom updateMany
   */
  export type ChatroomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chatrooms.
     */
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyInput>
    /**
     * Filter which Chatrooms to update
     */
    where?: ChatroomWhereInput
    /**
     * Limit how many Chatrooms to update.
     */
    limit?: number
  }

  /**
   * Chatroom updateManyAndReturn
   */
  export type ChatroomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * The data used to update Chatrooms.
     */
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyInput>
    /**
     * Filter which Chatrooms to update
     */
    where?: ChatroomWhereInput
    /**
     * Limit how many Chatrooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chatroom upsert
   */
  export type ChatroomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * The filter to search for the Chatroom to update in case it exists.
     */
    where: ChatroomWhereUniqueInput
    /**
     * In case the Chatroom found by the `where` argument doesn't exist, create a new Chatroom with this data.
     */
    create: XOR<ChatroomCreateInput, ChatroomUncheckedCreateInput>
    /**
     * In case the Chatroom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatroomUpdateInput, ChatroomUncheckedUpdateInput>
  }

  /**
   * Chatroom delete
   */
  export type ChatroomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
    /**
     * Filter which Chatroom to delete.
     */
    where: ChatroomWhereUniqueInput
  }

  /**
   * Chatroom deleteMany
   */
  export type ChatroomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chatrooms to delete
     */
    where?: ChatroomWhereInput
    /**
     * Limit how many Chatrooms to delete.
     */
    limit?: number
  }

  /**
   * Chatroom.userParticipants
   */
  export type Chatroom$userParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Chatroom.aiParticipants
   */
  export type Chatroom$aiParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    where?: AIWhereInput
    orderBy?: AIOrderByWithRelationInput | AIOrderByWithRelationInput[]
    cursor?: AIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIScalarFieldEnum | AIScalarFieldEnum[]
  }

  /**
   * Chatroom.messages
   */
  export type Chatroom$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * Chatroom without action
   */
  export type ChatroomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chatroom
     */
    select?: ChatroomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chatroom
     */
    omit?: ChatroomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatroomInclude<ExtArgs> | null
  }


  /**
   * Model AI
   */

  export type AggregateAI = {
    _count: AICountAggregateOutputType | null
    _avg: AIAvgAggregateOutputType | null
    _sum: AISumAggregateOutputType | null
    _min: AIMinAggregateOutputType | null
    _max: AIMaxAggregateOutputType | null
  }

  export type AIAvgAggregateOutputType = {
    ai_id: number | null
    chatroom_id: number | null
  }

  export type AISumAggregateOutputType = {
    ai_id: number | null
    chatroom_id: number | null
  }

  export type AIMinAggregateOutputType = {
    ai_id: number | null
    model: string | null
    prompt_style: string | null
    chatroom_id: number | null
  }

  export type AIMaxAggregateOutputType = {
    ai_id: number | null
    model: string | null
    prompt_style: string | null
    chatroom_id: number | null
  }

  export type AICountAggregateOutputType = {
    ai_id: number
    model: number
    prompt_style: number
    chatroom_id: number
    _all: number
  }


  export type AIAvgAggregateInputType = {
    ai_id?: true
    chatroom_id?: true
  }

  export type AISumAggregateInputType = {
    ai_id?: true
    chatroom_id?: true
  }

  export type AIMinAggregateInputType = {
    ai_id?: true
    model?: true
    prompt_style?: true
    chatroom_id?: true
  }

  export type AIMaxAggregateInputType = {
    ai_id?: true
    model?: true
    prompt_style?: true
    chatroom_id?: true
  }

  export type AICountAggregateInputType = {
    ai_id?: true
    model?: true
    prompt_style?: true
    chatroom_id?: true
    _all?: true
  }

  export type AIAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AI to aggregate.
     */
    where?: AIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIS to fetch.
     */
    orderBy?: AIOrderByWithRelationInput | AIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIS
    **/
    _count?: true | AICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AISumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIMaxAggregateInputType
  }

  export type GetAIAggregateType<T extends AIAggregateArgs> = {
        [P in keyof T & keyof AggregateAI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAI[P]>
      : GetScalarType<T[P], AggregateAI[P]>
  }




  export type AIGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIWhereInput
    orderBy?: AIOrderByWithAggregationInput | AIOrderByWithAggregationInput[]
    by: AIScalarFieldEnum[] | AIScalarFieldEnum
    having?: AIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AICountAggregateInputType | true
    _avg?: AIAvgAggregateInputType
    _sum?: AISumAggregateInputType
    _min?: AIMinAggregateInputType
    _max?: AIMaxAggregateInputType
  }

  export type AIGroupByOutputType = {
    ai_id: number
    model: string
    prompt_style: string
    chatroom_id: number
    _count: AICountAggregateOutputType | null
    _avg: AIAvgAggregateOutputType | null
    _sum: AISumAggregateOutputType | null
    _min: AIMinAggregateOutputType | null
    _max: AIMaxAggregateOutputType | null
  }

  type GetAIGroupByPayload<T extends AIGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIGroupByOutputType[P]>
            : GetScalarType<T[P], AIGroupByOutputType[P]>
        }
      >
    >


  export type AISelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ai_id?: boolean
    model?: boolean
    prompt_style?: boolean
    chatroom_id?: boolean
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    messages?: boolean | AI$messagesArgs<ExtArgs>
    _count?: boolean | AICountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aI"]>

  export type AISelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ai_id?: boolean
    model?: boolean
    prompt_style?: boolean
    chatroom_id?: boolean
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aI"]>

  export type AISelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ai_id?: boolean
    model?: boolean
    prompt_style?: boolean
    chatroom_id?: boolean
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aI"]>

  export type AISelectScalar = {
    ai_id?: boolean
    model?: boolean
    prompt_style?: boolean
    chatroom_id?: boolean
  }

  export type AIOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ai_id" | "model" | "prompt_style" | "chatroom_id", ExtArgs["result"]["aI"]>
  export type AIInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    messages?: boolean | AI$messagesArgs<ExtArgs>
    _count?: boolean | AICountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AIIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
  }
  export type AIIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
  }

  export type $AIPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AI"
    objects: {
      chatroom: Prisma.$ChatroomPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ai_id: number
      model: string
      prompt_style: string
      chatroom_id: number
    }, ExtArgs["result"]["aI"]>
    composites: {}
  }

  type AIGetPayload<S extends boolean | null | undefined | AIDefaultArgs> = $Result.GetResult<Prisma.$AIPayload, S>

  type AICountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AICountAggregateInputType | true
    }

  export interface AIDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AI'], meta: { name: 'AI' } }
    /**
     * Find zero or one AI that matches the filter.
     * @param {AIFindUniqueArgs} args - Arguments to find a AI
     * @example
     * // Get one AI
     * const aI = await prisma.aI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIFindUniqueArgs>(args: SelectSubset<T, AIFindUniqueArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AI that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIFindUniqueOrThrowArgs} args - Arguments to find a AI
     * @example
     * // Get one AI
     * const aI = await prisma.aI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIFindUniqueOrThrowArgs>(args: SelectSubset<T, AIFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIFindFirstArgs} args - Arguments to find a AI
     * @example
     * // Get one AI
     * const aI = await prisma.aI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIFindFirstArgs>(args?: SelectSubset<T, AIFindFirstArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AI that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIFindFirstOrThrowArgs} args - Arguments to find a AI
     * @example
     * // Get one AI
     * const aI = await prisma.aI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIFindFirstOrThrowArgs>(args?: SelectSubset<T, AIFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIS
     * const aIS = await prisma.aI.findMany()
     * 
     * // Get first 10 AIS
     * const aIS = await prisma.aI.findMany({ take: 10 })
     * 
     * // Only select the `ai_id`
     * const aIWithAi_idOnly = await prisma.aI.findMany({ select: { ai_id: true } })
     * 
     */
    findMany<T extends AIFindManyArgs>(args?: SelectSubset<T, AIFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AI.
     * @param {AICreateArgs} args - Arguments to create a AI.
     * @example
     * // Create one AI
     * const AI = await prisma.aI.create({
     *   data: {
     *     // ... data to create a AI
     *   }
     * })
     * 
     */
    create<T extends AICreateArgs>(args: SelectSubset<T, AICreateArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIS.
     * @param {AICreateManyArgs} args - Arguments to create many AIS.
     * @example
     * // Create many AIS
     * const aI = await prisma.aI.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AICreateManyArgs>(args?: SelectSubset<T, AICreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIS and returns the data saved in the database.
     * @param {AICreateManyAndReturnArgs} args - Arguments to create many AIS.
     * @example
     * // Create many AIS
     * const aI = await prisma.aI.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIS and only return the `ai_id`
     * const aIWithAi_idOnly = await prisma.aI.createManyAndReturn({
     *   select: { ai_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AICreateManyAndReturnArgs>(args?: SelectSubset<T, AICreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AI.
     * @param {AIDeleteArgs} args - Arguments to delete one AI.
     * @example
     * // Delete one AI
     * const AI = await prisma.aI.delete({
     *   where: {
     *     // ... filter to delete one AI
     *   }
     * })
     * 
     */
    delete<T extends AIDeleteArgs>(args: SelectSubset<T, AIDeleteArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AI.
     * @param {AIUpdateArgs} args - Arguments to update one AI.
     * @example
     * // Update one AI
     * const aI = await prisma.aI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIUpdateArgs>(args: SelectSubset<T, AIUpdateArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIS.
     * @param {AIDeleteManyArgs} args - Arguments to filter AIS to delete.
     * @example
     * // Delete a few AIS
     * const { count } = await prisma.aI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIDeleteManyArgs>(args?: SelectSubset<T, AIDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIS
     * const aI = await prisma.aI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIUpdateManyArgs>(args: SelectSubset<T, AIUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIS and returns the data updated in the database.
     * @param {AIUpdateManyAndReturnArgs} args - Arguments to update many AIS.
     * @example
     * // Update many AIS
     * const aI = await prisma.aI.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIS and only return the `ai_id`
     * const aIWithAi_idOnly = await prisma.aI.updateManyAndReturn({
     *   select: { ai_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIUpdateManyAndReturnArgs>(args: SelectSubset<T, AIUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AI.
     * @param {AIUpsertArgs} args - Arguments to update or create a AI.
     * @example
     * // Update or create a AI
     * const aI = await prisma.aI.upsert({
     *   create: {
     *     // ... data to create a AI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AI we want to update
     *   }
     * })
     */
    upsert<T extends AIUpsertArgs>(args: SelectSubset<T, AIUpsertArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AICountArgs} args - Arguments to filter AIS to count.
     * @example
     * // Count the number of AIS
     * const count = await prisma.aI.count({
     *   where: {
     *     // ... the filter for the AIS we want to count
     *   }
     * })
    **/
    count<T extends AICountArgs>(
      args?: Subset<T, AICountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIAggregateArgs>(args: Subset<T, AIAggregateArgs>): Prisma.PrismaPromise<GetAIAggregateType<T>>

    /**
     * Group by AI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIGroupByArgs['orderBy'] }
        : { orderBy?: AIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AI model
   */
  readonly fields: AIFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom<T extends ChatroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatroomDefaultArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends AI$messagesArgs<ExtArgs> = {}>(args?: Subset<T, AI$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AI model
   */
  interface AIFieldRefs {
    readonly ai_id: FieldRef<"AI", 'Int'>
    readonly model: FieldRef<"AI", 'String'>
    readonly prompt_style: FieldRef<"AI", 'String'>
    readonly chatroom_id: FieldRef<"AI", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AI findUnique
   */
  export type AIFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * Filter, which AI to fetch.
     */
    where: AIWhereUniqueInput
  }

  /**
   * AI findUniqueOrThrow
   */
  export type AIFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * Filter, which AI to fetch.
     */
    where: AIWhereUniqueInput
  }

  /**
   * AI findFirst
   */
  export type AIFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * Filter, which AI to fetch.
     */
    where?: AIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIS to fetch.
     */
    orderBy?: AIOrderByWithRelationInput | AIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIS.
     */
    cursor?: AIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIS.
     */
    distinct?: AIScalarFieldEnum | AIScalarFieldEnum[]
  }

  /**
   * AI findFirstOrThrow
   */
  export type AIFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * Filter, which AI to fetch.
     */
    where?: AIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIS to fetch.
     */
    orderBy?: AIOrderByWithRelationInput | AIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIS.
     */
    cursor?: AIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIS.
     */
    distinct?: AIScalarFieldEnum | AIScalarFieldEnum[]
  }

  /**
   * AI findMany
   */
  export type AIFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * Filter, which AIS to fetch.
     */
    where?: AIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIS to fetch.
     */
    orderBy?: AIOrderByWithRelationInput | AIOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIS.
     */
    cursor?: AIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIS.
     */
    skip?: number
    distinct?: AIScalarFieldEnum | AIScalarFieldEnum[]
  }

  /**
   * AI create
   */
  export type AICreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * The data needed to create a AI.
     */
    data: XOR<AICreateInput, AIUncheckedCreateInput>
  }

  /**
   * AI createMany
   */
  export type AICreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIS.
     */
    data: AICreateManyInput | AICreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AI createManyAndReturn
   */
  export type AICreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * The data used to create many AIS.
     */
    data: AICreateManyInput | AICreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AI update
   */
  export type AIUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * The data needed to update a AI.
     */
    data: XOR<AIUpdateInput, AIUncheckedUpdateInput>
    /**
     * Choose, which AI to update.
     */
    where: AIWhereUniqueInput
  }

  /**
   * AI updateMany
   */
  export type AIUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIS.
     */
    data: XOR<AIUpdateManyMutationInput, AIUncheckedUpdateManyInput>
    /**
     * Filter which AIS to update
     */
    where?: AIWhereInput
    /**
     * Limit how many AIS to update.
     */
    limit?: number
  }

  /**
   * AI updateManyAndReturn
   */
  export type AIUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * The data used to update AIS.
     */
    data: XOR<AIUpdateManyMutationInput, AIUncheckedUpdateManyInput>
    /**
     * Filter which AIS to update
     */
    where?: AIWhereInput
    /**
     * Limit how many AIS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AI upsert
   */
  export type AIUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * The filter to search for the AI to update in case it exists.
     */
    where: AIWhereUniqueInput
    /**
     * In case the AI found by the `where` argument doesn't exist, create a new AI with this data.
     */
    create: XOR<AICreateInput, AIUncheckedCreateInput>
    /**
     * In case the AI was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIUpdateInput, AIUncheckedUpdateInput>
  }

  /**
   * AI delete
   */
  export type AIDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    /**
     * Filter which AI to delete.
     */
    where: AIWhereUniqueInput
  }

  /**
   * AI deleteMany
   */
  export type AIDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIS to delete
     */
    where?: AIWhereInput
    /**
     * Limit how many AIS to delete.
     */
    limit?: number
  }

  /**
   * AI.messages
   */
  export type AI$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * AI without action
   */
  export type AIDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageAvgAggregateOutputType = {
    message_id: number | null
    chatroom_id: number | null
    user_sender_id: number | null
    ai_sender_id: number | null
  }

  export type ChatMessageSumAggregateOutputType = {
    message_id: number | null
    chatroom_id: number | null
    user_sender_id: number | null
    ai_sender_id: number | null
  }

  export type ChatMessageMinAggregateOutputType = {
    message_id: number | null
    sender_type: $Enums.SenderType | null
    content: string | null
    sent_at: Date | null
    chatroom_id: number | null
    user_sender_id: number | null
    ai_sender_id: number | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    message_id: number | null
    sender_type: $Enums.SenderType | null
    content: string | null
    sent_at: Date | null
    chatroom_id: number | null
    user_sender_id: number | null
    ai_sender_id: number | null
  }

  export type ChatMessageCountAggregateOutputType = {
    message_id: number
    sender_type: number
    content: number
    sent_at: number
    chatroom_id: number
    user_sender_id: number
    ai_sender_id: number
    _all: number
  }


  export type ChatMessageAvgAggregateInputType = {
    message_id?: true
    chatroom_id?: true
    user_sender_id?: true
    ai_sender_id?: true
  }

  export type ChatMessageSumAggregateInputType = {
    message_id?: true
    chatroom_id?: true
    user_sender_id?: true
    ai_sender_id?: true
  }

  export type ChatMessageMinAggregateInputType = {
    message_id?: true
    sender_type?: true
    content?: true
    sent_at?: true
    chatroom_id?: true
    user_sender_id?: true
    ai_sender_id?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    message_id?: true
    sender_type?: true
    content?: true
    sent_at?: true
    chatroom_id?: true
    user_sender_id?: true
    ai_sender_id?: true
  }

  export type ChatMessageCountAggregateInputType = {
    message_id?: true
    sender_type?: true
    content?: true
    sent_at?: true
    chatroom_id?: true
    user_sender_id?: true
    ai_sender_id?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _avg?: ChatMessageAvgAggregateInputType
    _sum?: ChatMessageSumAggregateInputType
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    message_id: number
    sender_type: $Enums.SenderType
    content: string
    sent_at: Date
    chatroom_id: number
    user_sender_id: number | null
    ai_sender_id: number | null
    _count: ChatMessageCountAggregateOutputType | null
    _avg: ChatMessageAvgAggregateOutputType | null
    _sum: ChatMessageSumAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    sender_type?: boolean
    content?: boolean
    sent_at?: boolean
    chatroom_id?: boolean
    user_sender_id?: boolean
    ai_sender_id?: boolean
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    userSender?: boolean | ChatMessage$userSenderArgs<ExtArgs>
    aiSender?: boolean | ChatMessage$aiSenderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    sender_type?: boolean
    content?: boolean
    sent_at?: boolean
    chatroom_id?: boolean
    user_sender_id?: boolean
    ai_sender_id?: boolean
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    userSender?: boolean | ChatMessage$userSenderArgs<ExtArgs>
    aiSender?: boolean | ChatMessage$aiSenderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    message_id?: boolean
    sender_type?: boolean
    content?: boolean
    sent_at?: boolean
    chatroom_id?: boolean
    user_sender_id?: boolean
    ai_sender_id?: boolean
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    userSender?: boolean | ChatMessage$userSenderArgs<ExtArgs>
    aiSender?: boolean | ChatMessage$aiSenderArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    message_id?: boolean
    sender_type?: boolean
    content?: boolean
    sent_at?: boolean
    chatroom_id?: boolean
    user_sender_id?: boolean
    ai_sender_id?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"message_id" | "sender_type" | "content" | "sent_at" | "chatroom_id" | "user_sender_id" | "ai_sender_id", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    userSender?: boolean | ChatMessage$userSenderArgs<ExtArgs>
    aiSender?: boolean | ChatMessage$aiSenderArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    userSender?: boolean | ChatMessage$userSenderArgs<ExtArgs>
    aiSender?: boolean | ChatMessage$aiSenderArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatroom?: boolean | ChatroomDefaultArgs<ExtArgs>
    userSender?: boolean | ChatMessage$userSenderArgs<ExtArgs>
    aiSender?: boolean | ChatMessage$aiSenderArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      chatroom: Prisma.$ChatroomPayload<ExtArgs>
      userSender: Prisma.$UserPayload<ExtArgs> | null
      aiSender: Prisma.$AIPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      message_id: number
      sender_type: $Enums.SenderType
      content: string
      sent_at: Date
      chatroom_id: number
      user_sender_id: number | null
      ai_sender_id: number | null
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `message_id`
     * const chatMessageWithMessage_idOnly = await prisma.chatMessage.findMany({ select: { message_id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `message_id`
     * const chatMessageWithMessage_idOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { message_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `message_id`
     * const chatMessageWithMessage_idOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { message_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatroom<T extends ChatroomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatroomDefaultArgs<ExtArgs>>): Prisma__ChatroomClient<$Result.GetResult<Prisma.$ChatroomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userSender<T extends ChatMessage$userSenderArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$userSenderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aiSender<T extends ChatMessage$aiSenderArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$aiSenderArgs<ExtArgs>>): Prisma__AIClient<$Result.GetResult<Prisma.$AIPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly message_id: FieldRef<"ChatMessage", 'Int'>
    readonly sender_type: FieldRef<"ChatMessage", 'SenderType'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly sent_at: FieldRef<"ChatMessage", 'DateTime'>
    readonly chatroom_id: FieldRef<"ChatMessage", 'Int'>
    readonly user_sender_id: FieldRef<"ChatMessage", 'Int'>
    readonly ai_sender_id: FieldRef<"ChatMessage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.userSender
   */
  export type ChatMessage$userSenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatMessage.aiSender
   */
  export type ChatMessage$aiSenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AI
     */
    select?: AISelect<ExtArgs> | null
    /**
     * Omit specific fields from the AI
     */
    omit?: AIOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIInclude<ExtArgs> | null
    where?: AIWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatroomScalarFieldEnum: {
    chatroom_id: 'chatroom_id',
    title: 'title',
    owned_by: 'owned_by'
  };

  export type ChatroomScalarFieldEnum = (typeof ChatroomScalarFieldEnum)[keyof typeof ChatroomScalarFieldEnum]


  export const AIScalarFieldEnum: {
    ai_id: 'ai_id',
    model: 'model',
    prompt_style: 'prompt_style',
    chatroom_id: 'chatroom_id'
  };

  export type AIScalarFieldEnum = (typeof AIScalarFieldEnum)[keyof typeof AIScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    message_id: 'message_id',
    sender_type: 'sender_type',
    content: 'content',
    sent_at: 'sent_at',
    chatroom_id: 'chatroom_id',
    user_sender_id: 'user_sender_id',
    ai_sender_id: 'ai_sender_id'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SenderType'
   */
  export type EnumSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderType'>
    


  /**
   * Reference to a field of type 'SenderType[]'
   */
  export type ListEnumSenderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SenderType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    chatrooms?: ChatroomListRelationFilter
    ownedRooms?: ChatroomListRelationFilter
    messages?: ChatMessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    chatrooms?: ChatroomOrderByRelationAggregateInput
    ownedRooms?: ChatroomOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    chatrooms?: ChatroomListRelationFilter
    ownedRooms?: ChatroomListRelationFilter
    messages?: ChatMessageListRelationFilter
  }, "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ChatroomWhereInput = {
    AND?: ChatroomWhereInput | ChatroomWhereInput[]
    OR?: ChatroomWhereInput[]
    NOT?: ChatroomWhereInput | ChatroomWhereInput[]
    chatroom_id?: IntFilter<"Chatroom"> | number
    title?: StringFilter<"Chatroom"> | string
    owned_by?: IntFilter<"Chatroom"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    userParticipants?: UserListRelationFilter
    aiParticipants?: AIListRelationFilter
    messages?: ChatMessageListRelationFilter
  }

  export type ChatroomOrderByWithRelationInput = {
    chatroom_id?: SortOrder
    title?: SortOrder
    owned_by?: SortOrder
    owner?: UserOrderByWithRelationInput
    userParticipants?: UserOrderByRelationAggregateInput
    aiParticipants?: AIOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatroomWhereUniqueInput = Prisma.AtLeast<{
    chatroom_id?: number
    AND?: ChatroomWhereInput | ChatroomWhereInput[]
    OR?: ChatroomWhereInput[]
    NOT?: ChatroomWhereInput | ChatroomWhereInput[]
    title?: StringFilter<"Chatroom"> | string
    owned_by?: IntFilter<"Chatroom"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    userParticipants?: UserListRelationFilter
    aiParticipants?: AIListRelationFilter
    messages?: ChatMessageListRelationFilter
  }, "chatroom_id">

  export type ChatroomOrderByWithAggregationInput = {
    chatroom_id?: SortOrder
    title?: SortOrder
    owned_by?: SortOrder
    _count?: ChatroomCountOrderByAggregateInput
    _avg?: ChatroomAvgOrderByAggregateInput
    _max?: ChatroomMaxOrderByAggregateInput
    _min?: ChatroomMinOrderByAggregateInput
    _sum?: ChatroomSumOrderByAggregateInput
  }

  export type ChatroomScalarWhereWithAggregatesInput = {
    AND?: ChatroomScalarWhereWithAggregatesInput | ChatroomScalarWhereWithAggregatesInput[]
    OR?: ChatroomScalarWhereWithAggregatesInput[]
    NOT?: ChatroomScalarWhereWithAggregatesInput | ChatroomScalarWhereWithAggregatesInput[]
    chatroom_id?: IntWithAggregatesFilter<"Chatroom"> | number
    title?: StringWithAggregatesFilter<"Chatroom"> | string
    owned_by?: IntWithAggregatesFilter<"Chatroom"> | number
  }

  export type AIWhereInput = {
    AND?: AIWhereInput | AIWhereInput[]
    OR?: AIWhereInput[]
    NOT?: AIWhereInput | AIWhereInput[]
    ai_id?: IntFilter<"AI"> | number
    model?: StringFilter<"AI"> | string
    prompt_style?: StringFilter<"AI"> | string
    chatroom_id?: IntFilter<"AI"> | number
    chatroom?: XOR<ChatroomScalarRelationFilter, ChatroomWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type AIOrderByWithRelationInput = {
    ai_id?: SortOrder
    model?: SortOrder
    prompt_style?: SortOrder
    chatroom_id?: SortOrder
    chatroom?: ChatroomOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type AIWhereUniqueInput = Prisma.AtLeast<{
    ai_id?: number
    AND?: AIWhereInput | AIWhereInput[]
    OR?: AIWhereInput[]
    NOT?: AIWhereInput | AIWhereInput[]
    model?: StringFilter<"AI"> | string
    prompt_style?: StringFilter<"AI"> | string
    chatroom_id?: IntFilter<"AI"> | number
    chatroom?: XOR<ChatroomScalarRelationFilter, ChatroomWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "ai_id">

  export type AIOrderByWithAggregationInput = {
    ai_id?: SortOrder
    model?: SortOrder
    prompt_style?: SortOrder
    chatroom_id?: SortOrder
    _count?: AICountOrderByAggregateInput
    _avg?: AIAvgOrderByAggregateInput
    _max?: AIMaxOrderByAggregateInput
    _min?: AIMinOrderByAggregateInput
    _sum?: AISumOrderByAggregateInput
  }

  export type AIScalarWhereWithAggregatesInput = {
    AND?: AIScalarWhereWithAggregatesInput | AIScalarWhereWithAggregatesInput[]
    OR?: AIScalarWhereWithAggregatesInput[]
    NOT?: AIScalarWhereWithAggregatesInput | AIScalarWhereWithAggregatesInput[]
    ai_id?: IntWithAggregatesFilter<"AI"> | number
    model?: StringWithAggregatesFilter<"AI"> | string
    prompt_style?: StringWithAggregatesFilter<"AI"> | string
    chatroom_id?: IntWithAggregatesFilter<"AI"> | number
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    message_id?: IntFilter<"ChatMessage"> | number
    sender_type?: EnumSenderTypeFilter<"ChatMessage"> | $Enums.SenderType
    content?: StringFilter<"ChatMessage"> | string
    sent_at?: DateTimeFilter<"ChatMessage"> | Date | string
    chatroom_id?: IntFilter<"ChatMessage"> | number
    user_sender_id?: IntNullableFilter<"ChatMessage"> | number | null
    ai_sender_id?: IntNullableFilter<"ChatMessage"> | number | null
    chatroom?: XOR<ChatroomScalarRelationFilter, ChatroomWhereInput>
    userSender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    aiSender?: XOR<AINullableScalarRelationFilter, AIWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    message_id?: SortOrder
    sender_type?: SortOrder
    content?: SortOrder
    sent_at?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrderInput | SortOrder
    ai_sender_id?: SortOrderInput | SortOrder
    chatroom?: ChatroomOrderByWithRelationInput
    userSender?: UserOrderByWithRelationInput
    aiSender?: AIOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    message_id?: number
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sender_type?: EnumSenderTypeFilter<"ChatMessage"> | $Enums.SenderType
    content?: StringFilter<"ChatMessage"> | string
    sent_at?: DateTimeFilter<"ChatMessage"> | Date | string
    chatroom_id?: IntFilter<"ChatMessage"> | number
    user_sender_id?: IntNullableFilter<"ChatMessage"> | number | null
    ai_sender_id?: IntNullableFilter<"ChatMessage"> | number | null
    chatroom?: XOR<ChatroomScalarRelationFilter, ChatroomWhereInput>
    userSender?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    aiSender?: XOR<AINullableScalarRelationFilter, AIWhereInput> | null
  }, "message_id">

  export type ChatMessageOrderByWithAggregationInput = {
    message_id?: SortOrder
    sender_type?: SortOrder
    content?: SortOrder
    sent_at?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrderInput | SortOrder
    ai_sender_id?: SortOrderInput | SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _avg?: ChatMessageAvgOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
    _sum?: ChatMessageSumOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    message_id?: IntWithAggregatesFilter<"ChatMessage"> | number
    sender_type?: EnumSenderTypeWithAggregatesFilter<"ChatMessage"> | $Enums.SenderType
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    sent_at?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    chatroom_id?: IntWithAggregatesFilter<"ChatMessage"> | number
    user_sender_id?: IntNullableWithAggregatesFilter<"ChatMessage"> | number | null
    ai_sender_id?: IntNullableWithAggregatesFilter<"ChatMessage"> | number | null
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    chatrooms?: ChatroomCreateNestedManyWithoutUserParticipantsInput
    ownedRooms?: ChatroomCreateNestedManyWithoutOwnerInput
    messages?: ChatMessageCreateNestedManyWithoutUserSenderInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    username: string
    email: string
    password: string
    chatrooms?: ChatroomUncheckedCreateNestedManyWithoutUserParticipantsInput
    ownedRooms?: ChatroomUncheckedCreateNestedManyWithoutOwnerInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserSenderInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatroomUpdateManyWithoutUserParticipantsNestedInput
    ownedRooms?: ChatroomUpdateManyWithoutOwnerNestedInput
    messages?: ChatMessageUpdateManyWithoutUserSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatroomUncheckedUpdateManyWithoutUserParticipantsNestedInput
    ownedRooms?: ChatroomUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutUserSenderNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ChatroomCreateInput = {
    title: string
    owner: UserCreateNestedOneWithoutOwnedRoomsInput
    userParticipants?: UserCreateNestedManyWithoutChatroomsInput
    aiParticipants?: AICreateNestedManyWithoutChatroomInput
    messages?: ChatMessageCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateInput = {
    chatroom_id?: number
    title: string
    owned_by: number
    userParticipants?: UserUncheckedCreateNestedManyWithoutChatroomsInput
    aiParticipants?: AIUncheckedCreateNestedManyWithoutChatroomInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomsNestedInput
    userParticipants?: UserUpdateManyWithoutChatroomsNestedInput
    aiParticipants?: AIUpdateManyWithoutChatroomNestedInput
    messages?: ChatMessageUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    owned_by?: IntFieldUpdateOperationsInput | number
    userParticipants?: UserUncheckedUpdateManyWithoutChatroomsNestedInput
    aiParticipants?: AIUncheckedUpdateManyWithoutChatroomNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomCreateManyInput = {
    chatroom_id?: number
    title: string
    owned_by: number
  }

  export type ChatroomUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ChatroomUncheckedUpdateManyInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    owned_by?: IntFieldUpdateOperationsInput | number
  }

  export type AICreateInput = {
    model: string
    prompt_style: string
    chatroom: ChatroomCreateNestedOneWithoutAiParticipantsInput
    messages?: ChatMessageCreateNestedManyWithoutAiSenderInput
  }

  export type AIUncheckedCreateInput = {
    ai_id?: number
    model: string
    prompt_style: string
    chatroom_id: number
    messages?: ChatMessageUncheckedCreateNestedManyWithoutAiSenderInput
  }

  export type AIUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomUpdateOneRequiredWithoutAiParticipantsNestedInput
    messages?: ChatMessageUpdateManyWithoutAiSenderNestedInput
  }

  export type AIUncheckedUpdateInput = {
    ai_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    messages?: ChatMessageUncheckedUpdateManyWithoutAiSenderNestedInput
  }

  export type AICreateManyInput = {
    ai_id?: number
    model: string
    prompt_style: string
    chatroom_id: number
  }

  export type AIUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
  }

  export type AIUncheckedUpdateManyInput = {
    ai_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatMessageCreateInput = {
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom: ChatroomCreateNestedOneWithoutMessagesInput
    userSender?: UserCreateNestedOneWithoutMessagesInput
    aiSender?: AICreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom_id: number
    user_sender_id?: number | null
    ai_sender_id?: number | null
  }

  export type ChatMessageUpdateInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: ChatroomUpdateOneRequiredWithoutMessagesNestedInput
    userSender?: UserUpdateOneWithoutMessagesNestedInput
    aiSender?: AIUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    user_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    ai_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageCreateManyInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom_id: number
    user_sender_id?: number | null
    ai_sender_id?: number | null
  }

  export type ChatMessageUpdateManyMutationInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    user_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    ai_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ChatroomListRelationFilter = {
    every?: ChatroomWhereInput
    some?: ChatroomWhereInput
    none?: ChatroomWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatroomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AIListRelationFilter = {
    every?: AIWhereInput
    some?: AIWhereInput
    none?: AIWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatroomCountOrderByAggregateInput = {
    chatroom_id?: SortOrder
    title?: SortOrder
    owned_by?: SortOrder
  }

  export type ChatroomAvgOrderByAggregateInput = {
    chatroom_id?: SortOrder
    owned_by?: SortOrder
  }

  export type ChatroomMaxOrderByAggregateInput = {
    chatroom_id?: SortOrder
    title?: SortOrder
    owned_by?: SortOrder
  }

  export type ChatroomMinOrderByAggregateInput = {
    chatroom_id?: SortOrder
    title?: SortOrder
    owned_by?: SortOrder
  }

  export type ChatroomSumOrderByAggregateInput = {
    chatroom_id?: SortOrder
    owned_by?: SortOrder
  }

  export type ChatroomScalarRelationFilter = {
    is?: ChatroomWhereInput
    isNot?: ChatroomWhereInput
  }

  export type AICountOrderByAggregateInput = {
    ai_id?: SortOrder
    model?: SortOrder
    prompt_style?: SortOrder
    chatroom_id?: SortOrder
  }

  export type AIAvgOrderByAggregateInput = {
    ai_id?: SortOrder
    chatroom_id?: SortOrder
  }

  export type AIMaxOrderByAggregateInput = {
    ai_id?: SortOrder
    model?: SortOrder
    prompt_style?: SortOrder
    chatroom_id?: SortOrder
  }

  export type AIMinOrderByAggregateInput = {
    ai_id?: SortOrder
    model?: SortOrder
    prompt_style?: SortOrder
    chatroom_id?: SortOrder
  }

  export type AISumOrderByAggregateInput = {
    ai_id?: SortOrder
    chatroom_id?: SortOrder
  }

  export type EnumSenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeFilter<$PrismaModel> | $Enums.SenderType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AINullableScalarRelationFilter = {
    is?: AIWhereInput | null
    isNot?: AIWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChatMessageCountOrderByAggregateInput = {
    message_id?: SortOrder
    sender_type?: SortOrder
    content?: SortOrder
    sent_at?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrder
    ai_sender_id?: SortOrder
  }

  export type ChatMessageAvgOrderByAggregateInput = {
    message_id?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrder
    ai_sender_id?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    message_id?: SortOrder
    sender_type?: SortOrder
    content?: SortOrder
    sent_at?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrder
    ai_sender_id?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    message_id?: SortOrder
    sender_type?: SortOrder
    content?: SortOrder
    sent_at?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrder
    ai_sender_id?: SortOrder
  }

  export type ChatMessageSumOrderByAggregateInput = {
    message_id?: SortOrder
    chatroom_id?: SortOrder
    user_sender_id?: SortOrder
    ai_sender_id?: SortOrder
  }

  export type EnumSenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenderTypeFilter<$PrismaModel>
    _max?: NestedEnumSenderTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ChatroomCreateNestedManyWithoutUserParticipantsInput = {
    create?: XOR<ChatroomCreateWithoutUserParticipantsInput, ChatroomUncheckedCreateWithoutUserParticipantsInput> | ChatroomCreateWithoutUserParticipantsInput[] | ChatroomUncheckedCreateWithoutUserParticipantsInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserParticipantsInput | ChatroomCreateOrConnectWithoutUserParticipantsInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
  }

  export type ChatroomCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChatroomCreateWithoutOwnerInput, ChatroomUncheckedCreateWithoutOwnerInput> | ChatroomCreateWithoutOwnerInput[] | ChatroomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutOwnerInput | ChatroomCreateOrConnectWithoutOwnerInput[]
    createMany?: ChatroomCreateManyOwnerInputEnvelope
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutUserSenderInput = {
    create?: XOR<ChatMessageCreateWithoutUserSenderInput, ChatMessageUncheckedCreateWithoutUserSenderInput> | ChatMessageCreateWithoutUserSenderInput[] | ChatMessageUncheckedCreateWithoutUserSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserSenderInput | ChatMessageCreateOrConnectWithoutUserSenderInput[]
    createMany?: ChatMessageCreateManyUserSenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatroomUncheckedCreateNestedManyWithoutUserParticipantsInput = {
    create?: XOR<ChatroomCreateWithoutUserParticipantsInput, ChatroomUncheckedCreateWithoutUserParticipantsInput> | ChatroomCreateWithoutUserParticipantsInput[] | ChatroomUncheckedCreateWithoutUserParticipantsInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserParticipantsInput | ChatroomCreateOrConnectWithoutUserParticipantsInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
  }

  export type ChatroomUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ChatroomCreateWithoutOwnerInput, ChatroomUncheckedCreateWithoutOwnerInput> | ChatroomCreateWithoutOwnerInput[] | ChatroomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutOwnerInput | ChatroomCreateOrConnectWithoutOwnerInput[]
    createMany?: ChatroomCreateManyOwnerInputEnvelope
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutUserSenderInput = {
    create?: XOR<ChatMessageCreateWithoutUserSenderInput, ChatMessageUncheckedCreateWithoutUserSenderInput> | ChatMessageCreateWithoutUserSenderInput[] | ChatMessageUncheckedCreateWithoutUserSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserSenderInput | ChatMessageCreateOrConnectWithoutUserSenderInput[]
    createMany?: ChatMessageCreateManyUserSenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ChatroomUpdateManyWithoutUserParticipantsNestedInput = {
    create?: XOR<ChatroomCreateWithoutUserParticipantsInput, ChatroomUncheckedCreateWithoutUserParticipantsInput> | ChatroomCreateWithoutUserParticipantsInput[] | ChatroomUncheckedCreateWithoutUserParticipantsInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserParticipantsInput | ChatroomCreateOrConnectWithoutUserParticipantsInput[]
    upsert?: ChatroomUpsertWithWhereUniqueWithoutUserParticipantsInput | ChatroomUpsertWithWhereUniqueWithoutUserParticipantsInput[]
    set?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    disconnect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    delete?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    update?: ChatroomUpdateWithWhereUniqueWithoutUserParticipantsInput | ChatroomUpdateWithWhereUniqueWithoutUserParticipantsInput[]
    updateMany?: ChatroomUpdateManyWithWhereWithoutUserParticipantsInput | ChatroomUpdateManyWithWhereWithoutUserParticipantsInput[]
    deleteMany?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
  }

  export type ChatroomUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChatroomCreateWithoutOwnerInput, ChatroomUncheckedCreateWithoutOwnerInput> | ChatroomCreateWithoutOwnerInput[] | ChatroomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutOwnerInput | ChatroomCreateOrConnectWithoutOwnerInput[]
    upsert?: ChatroomUpsertWithWhereUniqueWithoutOwnerInput | ChatroomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChatroomCreateManyOwnerInputEnvelope
    set?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    disconnect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    delete?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    update?: ChatroomUpdateWithWhereUniqueWithoutOwnerInput | ChatroomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChatroomUpdateManyWithWhereWithoutOwnerInput | ChatroomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutUserSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserSenderInput, ChatMessageUncheckedCreateWithoutUserSenderInput> | ChatMessageCreateWithoutUserSenderInput[] | ChatMessageUncheckedCreateWithoutUserSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserSenderInput | ChatMessageCreateOrConnectWithoutUserSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserSenderInput | ChatMessageUpsertWithWhereUniqueWithoutUserSenderInput[]
    createMany?: ChatMessageCreateManyUserSenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserSenderInput | ChatMessageUpdateWithWhereUniqueWithoutUserSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserSenderInput | ChatMessageUpdateManyWithWhereWithoutUserSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChatroomUncheckedUpdateManyWithoutUserParticipantsNestedInput = {
    create?: XOR<ChatroomCreateWithoutUserParticipantsInput, ChatroomUncheckedCreateWithoutUserParticipantsInput> | ChatroomCreateWithoutUserParticipantsInput[] | ChatroomUncheckedCreateWithoutUserParticipantsInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutUserParticipantsInput | ChatroomCreateOrConnectWithoutUserParticipantsInput[]
    upsert?: ChatroomUpsertWithWhereUniqueWithoutUserParticipantsInput | ChatroomUpsertWithWhereUniqueWithoutUserParticipantsInput[]
    set?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    disconnect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    delete?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    update?: ChatroomUpdateWithWhereUniqueWithoutUserParticipantsInput | ChatroomUpdateWithWhereUniqueWithoutUserParticipantsInput[]
    updateMany?: ChatroomUpdateManyWithWhereWithoutUserParticipantsInput | ChatroomUpdateManyWithWhereWithoutUserParticipantsInput[]
    deleteMany?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
  }

  export type ChatroomUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ChatroomCreateWithoutOwnerInput, ChatroomUncheckedCreateWithoutOwnerInput> | ChatroomCreateWithoutOwnerInput[] | ChatroomUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ChatroomCreateOrConnectWithoutOwnerInput | ChatroomCreateOrConnectWithoutOwnerInput[]
    upsert?: ChatroomUpsertWithWhereUniqueWithoutOwnerInput | ChatroomUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ChatroomCreateManyOwnerInputEnvelope
    set?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    disconnect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    delete?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    connect?: ChatroomWhereUniqueInput | ChatroomWhereUniqueInput[]
    update?: ChatroomUpdateWithWhereUniqueWithoutOwnerInput | ChatroomUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ChatroomUpdateManyWithWhereWithoutOwnerInput | ChatroomUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutUserSenderInput, ChatMessageUncheckedCreateWithoutUserSenderInput> | ChatMessageCreateWithoutUserSenderInput[] | ChatMessageUncheckedCreateWithoutUserSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutUserSenderInput | ChatMessageCreateOrConnectWithoutUserSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutUserSenderInput | ChatMessageUpsertWithWhereUniqueWithoutUserSenderInput[]
    createMany?: ChatMessageCreateManyUserSenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutUserSenderInput | ChatMessageUpdateWithWhereUniqueWithoutUserSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutUserSenderInput | ChatMessageUpdateManyWithWhereWithoutUserSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedRoomsInput = {
    create?: XOR<UserCreateWithoutOwnedRoomsInput, UserUncheckedCreateWithoutOwnedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutChatroomsInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput> | UserCreateWithoutChatroomsInput[] | UserUncheckedCreateWithoutChatroomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput | UserCreateOrConnectWithoutChatroomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AICreateNestedManyWithoutChatroomInput = {
    create?: XOR<AICreateWithoutChatroomInput, AIUncheckedCreateWithoutChatroomInput> | AICreateWithoutChatroomInput[] | AIUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: AICreateOrConnectWithoutChatroomInput | AICreateOrConnectWithoutChatroomInput[]
    createMany?: AICreateManyChatroomInputEnvelope
    connect?: AIWhereUniqueInput | AIWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutChatroomInput = {
    create?: XOR<ChatMessageCreateWithoutChatroomInput, ChatMessageUncheckedCreateWithoutChatroomInput> | ChatMessageCreateWithoutChatroomInput[] | ChatMessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatroomInput | ChatMessageCreateOrConnectWithoutChatroomInput[]
    createMany?: ChatMessageCreateManyChatroomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutChatroomsInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput> | UserCreateWithoutChatroomsInput[] | UserUncheckedCreateWithoutChatroomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput | UserCreateOrConnectWithoutChatroomsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AIUncheckedCreateNestedManyWithoutChatroomInput = {
    create?: XOR<AICreateWithoutChatroomInput, AIUncheckedCreateWithoutChatroomInput> | AICreateWithoutChatroomInput[] | AIUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: AICreateOrConnectWithoutChatroomInput | AICreateOrConnectWithoutChatroomInput[]
    createMany?: AICreateManyChatroomInputEnvelope
    connect?: AIWhereUniqueInput | AIWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatroomInput = {
    create?: XOR<ChatMessageCreateWithoutChatroomInput, ChatMessageUncheckedCreateWithoutChatroomInput> | ChatMessageCreateWithoutChatroomInput[] | ChatMessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatroomInput | ChatMessageCreateOrConnectWithoutChatroomInput[]
    createMany?: ChatMessageCreateManyChatroomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOwnedRoomsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedRoomsInput, UserUncheckedCreateWithoutOwnedRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedRoomsInput
    upsert?: UserUpsertWithoutOwnedRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedRoomsInput, UserUpdateWithoutOwnedRoomsInput>, UserUncheckedUpdateWithoutOwnedRoomsInput>
  }

  export type UserUpdateManyWithoutChatroomsNestedInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput> | UserCreateWithoutChatroomsInput[] | UserUncheckedCreateWithoutChatroomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput | UserCreateOrConnectWithoutChatroomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatroomsInput | UserUpsertWithWhereUniqueWithoutChatroomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatroomsInput | UserUpdateWithWhereUniqueWithoutChatroomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatroomsInput | UserUpdateManyWithWhereWithoutChatroomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AIUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<AICreateWithoutChatroomInput, AIUncheckedCreateWithoutChatroomInput> | AICreateWithoutChatroomInput[] | AIUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: AICreateOrConnectWithoutChatroomInput | AICreateOrConnectWithoutChatroomInput[]
    upsert?: AIUpsertWithWhereUniqueWithoutChatroomInput | AIUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: AICreateManyChatroomInputEnvelope
    set?: AIWhereUniqueInput | AIWhereUniqueInput[]
    disconnect?: AIWhereUniqueInput | AIWhereUniqueInput[]
    delete?: AIWhereUniqueInput | AIWhereUniqueInput[]
    connect?: AIWhereUniqueInput | AIWhereUniqueInput[]
    update?: AIUpdateWithWhereUniqueWithoutChatroomInput | AIUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: AIUpdateManyWithWhereWithoutChatroomInput | AIUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: AIScalarWhereInput | AIScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatroomInput, ChatMessageUncheckedCreateWithoutChatroomInput> | ChatMessageCreateWithoutChatroomInput[] | ChatMessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatroomInput | ChatMessageCreateOrConnectWithoutChatroomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatroomInput | ChatMessageUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: ChatMessageCreateManyChatroomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatroomInput | ChatMessageUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatroomInput | ChatMessageUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutChatroomsNestedInput = {
    create?: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput> | UserCreateWithoutChatroomsInput[] | UserUncheckedCreateWithoutChatroomsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutChatroomsInput | UserCreateOrConnectWithoutChatroomsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutChatroomsInput | UserUpsertWithWhereUniqueWithoutChatroomsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutChatroomsInput | UserUpdateWithWhereUniqueWithoutChatroomsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutChatroomsInput | UserUpdateManyWithWhereWithoutChatroomsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AIUncheckedUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<AICreateWithoutChatroomInput, AIUncheckedCreateWithoutChatroomInput> | AICreateWithoutChatroomInput[] | AIUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: AICreateOrConnectWithoutChatroomInput | AICreateOrConnectWithoutChatroomInput[]
    upsert?: AIUpsertWithWhereUniqueWithoutChatroomInput | AIUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: AICreateManyChatroomInputEnvelope
    set?: AIWhereUniqueInput | AIWhereUniqueInput[]
    disconnect?: AIWhereUniqueInput | AIWhereUniqueInput[]
    delete?: AIWhereUniqueInput | AIWhereUniqueInput[]
    connect?: AIWhereUniqueInput | AIWhereUniqueInput[]
    update?: AIUpdateWithWhereUniqueWithoutChatroomInput | AIUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: AIUpdateManyWithWhereWithoutChatroomInput | AIUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: AIScalarWhereInput | AIScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatroomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatroomInput, ChatMessageUncheckedCreateWithoutChatroomInput> | ChatMessageCreateWithoutChatroomInput[] | ChatMessageUncheckedCreateWithoutChatroomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatroomInput | ChatMessageCreateOrConnectWithoutChatroomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatroomInput | ChatMessageUpsertWithWhereUniqueWithoutChatroomInput[]
    createMany?: ChatMessageCreateManyChatroomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatroomInput | ChatMessageUpdateWithWhereUniqueWithoutChatroomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatroomInput | ChatMessageUpdateManyWithWhereWithoutChatroomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatroomCreateNestedOneWithoutAiParticipantsInput = {
    create?: XOR<ChatroomCreateWithoutAiParticipantsInput, ChatroomUncheckedCreateWithoutAiParticipantsInput>
    connectOrCreate?: ChatroomCreateOrConnectWithoutAiParticipantsInput
    connect?: ChatroomWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutAiSenderInput = {
    create?: XOR<ChatMessageCreateWithoutAiSenderInput, ChatMessageUncheckedCreateWithoutAiSenderInput> | ChatMessageCreateWithoutAiSenderInput[] | ChatMessageUncheckedCreateWithoutAiSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAiSenderInput | ChatMessageCreateOrConnectWithoutAiSenderInput[]
    createMany?: ChatMessageCreateManyAiSenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutAiSenderInput = {
    create?: XOR<ChatMessageCreateWithoutAiSenderInput, ChatMessageUncheckedCreateWithoutAiSenderInput> | ChatMessageCreateWithoutAiSenderInput[] | ChatMessageUncheckedCreateWithoutAiSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAiSenderInput | ChatMessageCreateOrConnectWithoutAiSenderInput[]
    createMany?: ChatMessageCreateManyAiSenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatroomUpdateOneRequiredWithoutAiParticipantsNestedInput = {
    create?: XOR<ChatroomCreateWithoutAiParticipantsInput, ChatroomUncheckedCreateWithoutAiParticipantsInput>
    connectOrCreate?: ChatroomCreateOrConnectWithoutAiParticipantsInput
    upsert?: ChatroomUpsertWithoutAiParticipantsInput
    connect?: ChatroomWhereUniqueInput
    update?: XOR<XOR<ChatroomUpdateToOneWithWhereWithoutAiParticipantsInput, ChatroomUpdateWithoutAiParticipantsInput>, ChatroomUncheckedUpdateWithoutAiParticipantsInput>
  }

  export type ChatMessageUpdateManyWithoutAiSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAiSenderInput, ChatMessageUncheckedCreateWithoutAiSenderInput> | ChatMessageCreateWithoutAiSenderInput[] | ChatMessageUncheckedCreateWithoutAiSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAiSenderInput | ChatMessageCreateOrConnectWithoutAiSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAiSenderInput | ChatMessageUpsertWithWhereUniqueWithoutAiSenderInput[]
    createMany?: ChatMessageCreateManyAiSenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAiSenderInput | ChatMessageUpdateWithWhereUniqueWithoutAiSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAiSenderInput | ChatMessageUpdateManyWithWhereWithoutAiSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutAiSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutAiSenderInput, ChatMessageUncheckedCreateWithoutAiSenderInput> | ChatMessageCreateWithoutAiSenderInput[] | ChatMessageUncheckedCreateWithoutAiSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutAiSenderInput | ChatMessageCreateOrConnectWithoutAiSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutAiSenderInput | ChatMessageUpsertWithWhereUniqueWithoutAiSenderInput[]
    createMany?: ChatMessageCreateManyAiSenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutAiSenderInput | ChatMessageUpdateWithWhereUniqueWithoutAiSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutAiSenderInput | ChatMessageUpdateManyWithWhereWithoutAiSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatroomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatroomCreateWithoutMessagesInput, ChatroomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatroomCreateOrConnectWithoutMessagesInput
    connect?: ChatroomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type AICreateNestedOneWithoutMessagesInput = {
    create?: XOR<AICreateWithoutMessagesInput, AIUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AICreateOrConnectWithoutMessagesInput
    connect?: AIWhereUniqueInput
  }

  export type EnumSenderTypeFieldUpdateOperationsInput = {
    set?: $Enums.SenderType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatroomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatroomCreateWithoutMessagesInput, ChatroomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatroomCreateOrConnectWithoutMessagesInput
    upsert?: ChatroomUpsertWithoutMessagesInput
    connect?: ChatroomWhereUniqueInput
    update?: XOR<XOR<ChatroomUpdateToOneWithWhereWithoutMessagesInput, ChatroomUpdateWithoutMessagesInput>, ChatroomUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type AIUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<AICreateWithoutMessagesInput, AIUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AICreateOrConnectWithoutMessagesInput
    upsert?: AIUpsertWithoutMessagesInput
    disconnect?: AIWhereInput | boolean
    delete?: AIWhereInput | boolean
    connect?: AIWhereUniqueInput
    update?: XOR<XOR<AIUpdateToOneWithWhereWithoutMessagesInput, AIUpdateWithoutMessagesInput>, AIUncheckedUpdateWithoutMessagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumSenderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeFilter<$PrismaModel> | $Enums.SenderType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SenderType | EnumSenderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SenderType[] | ListEnumSenderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSenderTypeWithAggregatesFilter<$PrismaModel> | $Enums.SenderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSenderTypeFilter<$PrismaModel>
    _max?: NestedEnumSenderTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ChatroomCreateWithoutUserParticipantsInput = {
    title: string
    owner: UserCreateNestedOneWithoutOwnedRoomsInput
    aiParticipants?: AICreateNestedManyWithoutChatroomInput
    messages?: ChatMessageCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateWithoutUserParticipantsInput = {
    chatroom_id?: number
    title: string
    owned_by: number
    aiParticipants?: AIUncheckedCreateNestedManyWithoutChatroomInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomCreateOrConnectWithoutUserParticipantsInput = {
    where: ChatroomWhereUniqueInput
    create: XOR<ChatroomCreateWithoutUserParticipantsInput, ChatroomUncheckedCreateWithoutUserParticipantsInput>
  }

  export type ChatroomCreateWithoutOwnerInput = {
    title: string
    userParticipants?: UserCreateNestedManyWithoutChatroomsInput
    aiParticipants?: AICreateNestedManyWithoutChatroomInput
    messages?: ChatMessageCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateWithoutOwnerInput = {
    chatroom_id?: number
    title: string
    userParticipants?: UserUncheckedCreateNestedManyWithoutChatroomsInput
    aiParticipants?: AIUncheckedCreateNestedManyWithoutChatroomInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomCreateOrConnectWithoutOwnerInput = {
    where: ChatroomWhereUniqueInput
    create: XOR<ChatroomCreateWithoutOwnerInput, ChatroomUncheckedCreateWithoutOwnerInput>
  }

  export type ChatroomCreateManyOwnerInputEnvelope = {
    data: ChatroomCreateManyOwnerInput | ChatroomCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutUserSenderInput = {
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom: ChatroomCreateNestedOneWithoutMessagesInput
    aiSender?: AICreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutUserSenderInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom_id: number
    ai_sender_id?: number | null
  }

  export type ChatMessageCreateOrConnectWithoutUserSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutUserSenderInput, ChatMessageUncheckedCreateWithoutUserSenderInput>
  }

  export type ChatMessageCreateManyUserSenderInputEnvelope = {
    data: ChatMessageCreateManyUserSenderInput | ChatMessageCreateManyUserSenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatroomUpsertWithWhereUniqueWithoutUserParticipantsInput = {
    where: ChatroomWhereUniqueInput
    update: XOR<ChatroomUpdateWithoutUserParticipantsInput, ChatroomUncheckedUpdateWithoutUserParticipantsInput>
    create: XOR<ChatroomCreateWithoutUserParticipantsInput, ChatroomUncheckedCreateWithoutUserParticipantsInput>
  }

  export type ChatroomUpdateWithWhereUniqueWithoutUserParticipantsInput = {
    where: ChatroomWhereUniqueInput
    data: XOR<ChatroomUpdateWithoutUserParticipantsInput, ChatroomUncheckedUpdateWithoutUserParticipantsInput>
  }

  export type ChatroomUpdateManyWithWhereWithoutUserParticipantsInput = {
    where: ChatroomScalarWhereInput
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyWithoutUserParticipantsInput>
  }

  export type ChatroomScalarWhereInput = {
    AND?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
    OR?: ChatroomScalarWhereInput[]
    NOT?: ChatroomScalarWhereInput | ChatroomScalarWhereInput[]
    chatroom_id?: IntFilter<"Chatroom"> | number
    title?: StringFilter<"Chatroom"> | string
    owned_by?: IntFilter<"Chatroom"> | number
  }

  export type ChatroomUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ChatroomWhereUniqueInput
    update: XOR<ChatroomUpdateWithoutOwnerInput, ChatroomUncheckedUpdateWithoutOwnerInput>
    create: XOR<ChatroomCreateWithoutOwnerInput, ChatroomUncheckedCreateWithoutOwnerInput>
  }

  export type ChatroomUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ChatroomWhereUniqueInput
    data: XOR<ChatroomUpdateWithoutOwnerInput, ChatroomUncheckedUpdateWithoutOwnerInput>
  }

  export type ChatroomUpdateManyWithWhereWithoutOwnerInput = {
    where: ChatroomScalarWhereInput
    data: XOR<ChatroomUpdateManyMutationInput, ChatroomUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutUserSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutUserSenderInput, ChatMessageUncheckedUpdateWithoutUserSenderInput>
    create: XOR<ChatMessageCreateWithoutUserSenderInput, ChatMessageUncheckedCreateWithoutUserSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutUserSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutUserSenderInput, ChatMessageUncheckedUpdateWithoutUserSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutUserSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutUserSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    message_id?: IntFilter<"ChatMessage"> | number
    sender_type?: EnumSenderTypeFilter<"ChatMessage"> | $Enums.SenderType
    content?: StringFilter<"ChatMessage"> | string
    sent_at?: DateTimeFilter<"ChatMessage"> | Date | string
    chatroom_id?: IntFilter<"ChatMessage"> | number
    user_sender_id?: IntNullableFilter<"ChatMessage"> | number | null
    ai_sender_id?: IntNullableFilter<"ChatMessage"> | number | null
  }

  export type UserCreateWithoutOwnedRoomsInput = {
    username: string
    email: string
    password: string
    chatrooms?: ChatroomCreateNestedManyWithoutUserParticipantsInput
    messages?: ChatMessageCreateNestedManyWithoutUserSenderInput
  }

  export type UserUncheckedCreateWithoutOwnedRoomsInput = {
    user_id?: number
    username: string
    email: string
    password: string
    chatrooms?: ChatroomUncheckedCreateNestedManyWithoutUserParticipantsInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserSenderInput
  }

  export type UserCreateOrConnectWithoutOwnedRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedRoomsInput, UserUncheckedCreateWithoutOwnedRoomsInput>
  }

  export type UserCreateWithoutChatroomsInput = {
    username: string
    email: string
    password: string
    ownedRooms?: ChatroomCreateNestedManyWithoutOwnerInput
    messages?: ChatMessageCreateNestedManyWithoutUserSenderInput
  }

  export type UserUncheckedCreateWithoutChatroomsInput = {
    user_id?: number
    username: string
    email: string
    password: string
    ownedRooms?: ChatroomUncheckedCreateNestedManyWithoutOwnerInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutUserSenderInput
  }

  export type UserCreateOrConnectWithoutChatroomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
  }

  export type AICreateWithoutChatroomInput = {
    model: string
    prompt_style: string
    messages?: ChatMessageCreateNestedManyWithoutAiSenderInput
  }

  export type AIUncheckedCreateWithoutChatroomInput = {
    ai_id?: number
    model: string
    prompt_style: string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutAiSenderInput
  }

  export type AICreateOrConnectWithoutChatroomInput = {
    where: AIWhereUniqueInput
    create: XOR<AICreateWithoutChatroomInput, AIUncheckedCreateWithoutChatroomInput>
  }

  export type AICreateManyChatroomInputEnvelope = {
    data: AICreateManyChatroomInput | AICreateManyChatroomInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutChatroomInput = {
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    userSender?: UserCreateNestedOneWithoutMessagesInput
    aiSender?: AICreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatroomInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    user_sender_id?: number | null
    ai_sender_id?: number | null
  }

  export type ChatMessageCreateOrConnectWithoutChatroomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatroomInput, ChatMessageUncheckedCreateWithoutChatroomInput>
  }

  export type ChatMessageCreateManyChatroomInputEnvelope = {
    data: ChatMessageCreateManyChatroomInput | ChatMessageCreateManyChatroomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedRoomsInput = {
    update: XOR<UserUpdateWithoutOwnedRoomsInput, UserUncheckedUpdateWithoutOwnedRoomsInput>
    create: XOR<UserCreateWithoutOwnedRoomsInput, UserUncheckedCreateWithoutOwnedRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedRoomsInput, UserUncheckedUpdateWithoutOwnedRoomsInput>
  }

  export type UserUpdateWithoutOwnedRoomsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatroomUpdateManyWithoutUserParticipantsNestedInput
    messages?: ChatMessageUpdateManyWithoutUserSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedRoomsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatroomUncheckedUpdateManyWithoutUserParticipantsNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutUserSenderNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutChatroomsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutChatroomsInput, UserUncheckedUpdateWithoutChatroomsInput>
    create: XOR<UserCreateWithoutChatroomsInput, UserUncheckedCreateWithoutChatroomsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutChatroomsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutChatroomsInput, UserUncheckedUpdateWithoutChatroomsInput>
  }

  export type UserUpdateManyWithWhereWithoutChatroomsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutChatroomsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    user_id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
  }

  export type AIUpsertWithWhereUniqueWithoutChatroomInput = {
    where: AIWhereUniqueInput
    update: XOR<AIUpdateWithoutChatroomInput, AIUncheckedUpdateWithoutChatroomInput>
    create: XOR<AICreateWithoutChatroomInput, AIUncheckedCreateWithoutChatroomInput>
  }

  export type AIUpdateWithWhereUniqueWithoutChatroomInput = {
    where: AIWhereUniqueInput
    data: XOR<AIUpdateWithoutChatroomInput, AIUncheckedUpdateWithoutChatroomInput>
  }

  export type AIUpdateManyWithWhereWithoutChatroomInput = {
    where: AIScalarWhereInput
    data: XOR<AIUpdateManyMutationInput, AIUncheckedUpdateManyWithoutChatroomInput>
  }

  export type AIScalarWhereInput = {
    AND?: AIScalarWhereInput | AIScalarWhereInput[]
    OR?: AIScalarWhereInput[]
    NOT?: AIScalarWhereInput | AIScalarWhereInput[]
    ai_id?: IntFilter<"AI"> | number
    model?: StringFilter<"AI"> | string
    prompt_style?: StringFilter<"AI"> | string
    chatroom_id?: IntFilter<"AI"> | number
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatroomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatroomInput, ChatMessageUncheckedUpdateWithoutChatroomInput>
    create: XOR<ChatMessageCreateWithoutChatroomInput, ChatMessageUncheckedCreateWithoutChatroomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatroomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatroomInput, ChatMessageUncheckedUpdateWithoutChatroomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatroomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatroomInput>
  }

  export type ChatroomCreateWithoutAiParticipantsInput = {
    title: string
    owner: UserCreateNestedOneWithoutOwnedRoomsInput
    userParticipants?: UserCreateNestedManyWithoutChatroomsInput
    messages?: ChatMessageCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateWithoutAiParticipantsInput = {
    chatroom_id?: number
    title: string
    owned_by: number
    userParticipants?: UserUncheckedCreateNestedManyWithoutChatroomsInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomCreateOrConnectWithoutAiParticipantsInput = {
    where: ChatroomWhereUniqueInput
    create: XOR<ChatroomCreateWithoutAiParticipantsInput, ChatroomUncheckedCreateWithoutAiParticipantsInput>
  }

  export type ChatMessageCreateWithoutAiSenderInput = {
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom: ChatroomCreateNestedOneWithoutMessagesInput
    userSender?: UserCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutAiSenderInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom_id: number
    user_sender_id?: number | null
  }

  export type ChatMessageCreateOrConnectWithoutAiSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutAiSenderInput, ChatMessageUncheckedCreateWithoutAiSenderInput>
  }

  export type ChatMessageCreateManyAiSenderInputEnvelope = {
    data: ChatMessageCreateManyAiSenderInput | ChatMessageCreateManyAiSenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatroomUpsertWithoutAiParticipantsInput = {
    update: XOR<ChatroomUpdateWithoutAiParticipantsInput, ChatroomUncheckedUpdateWithoutAiParticipantsInput>
    create: XOR<ChatroomCreateWithoutAiParticipantsInput, ChatroomUncheckedCreateWithoutAiParticipantsInput>
    where?: ChatroomWhereInput
  }

  export type ChatroomUpdateToOneWithWhereWithoutAiParticipantsInput = {
    where?: ChatroomWhereInput
    data: XOR<ChatroomUpdateWithoutAiParticipantsInput, ChatroomUncheckedUpdateWithoutAiParticipantsInput>
  }

  export type ChatroomUpdateWithoutAiParticipantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomsNestedInput
    userParticipants?: UserUpdateManyWithoutChatroomsNestedInput
    messages?: ChatMessageUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateWithoutAiParticipantsInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    owned_by?: IntFieldUpdateOperationsInput | number
    userParticipants?: UserUncheckedUpdateManyWithoutChatroomsNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutAiSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutAiSenderInput, ChatMessageUncheckedUpdateWithoutAiSenderInput>
    create: XOR<ChatMessageCreateWithoutAiSenderInput, ChatMessageUncheckedCreateWithoutAiSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutAiSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutAiSenderInput, ChatMessageUncheckedUpdateWithoutAiSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutAiSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutAiSenderInput>
  }

  export type ChatroomCreateWithoutMessagesInput = {
    title: string
    owner: UserCreateNestedOneWithoutOwnedRoomsInput
    userParticipants?: UserCreateNestedManyWithoutChatroomsInput
    aiParticipants?: AICreateNestedManyWithoutChatroomInput
  }

  export type ChatroomUncheckedCreateWithoutMessagesInput = {
    chatroom_id?: number
    title: string
    owned_by: number
    userParticipants?: UserUncheckedCreateNestedManyWithoutChatroomsInput
    aiParticipants?: AIUncheckedCreateNestedManyWithoutChatroomInput
  }

  export type ChatroomCreateOrConnectWithoutMessagesInput = {
    where: ChatroomWhereUniqueInput
    create: XOR<ChatroomCreateWithoutMessagesInput, ChatroomUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    username: string
    email: string
    password: string
    chatrooms?: ChatroomCreateNestedManyWithoutUserParticipantsInput
    ownedRooms?: ChatroomCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    user_id?: number
    username: string
    email: string
    password: string
    chatrooms?: ChatroomUncheckedCreateNestedManyWithoutUserParticipantsInput
    ownedRooms?: ChatroomUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type AICreateWithoutMessagesInput = {
    model: string
    prompt_style: string
    chatroom: ChatroomCreateNestedOneWithoutAiParticipantsInput
  }

  export type AIUncheckedCreateWithoutMessagesInput = {
    ai_id?: number
    model: string
    prompt_style: string
    chatroom_id: number
  }

  export type AICreateOrConnectWithoutMessagesInput = {
    where: AIWhereUniqueInput
    create: XOR<AICreateWithoutMessagesInput, AIUncheckedCreateWithoutMessagesInput>
  }

  export type ChatroomUpsertWithoutMessagesInput = {
    update: XOR<ChatroomUpdateWithoutMessagesInput, ChatroomUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatroomCreateWithoutMessagesInput, ChatroomUncheckedCreateWithoutMessagesInput>
    where?: ChatroomWhereInput
  }

  export type ChatroomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatroomWhereInput
    data: XOR<ChatroomUpdateWithoutMessagesInput, ChatroomUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatroomUpdateWithoutMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomsNestedInput
    userParticipants?: UserUpdateManyWithoutChatroomsNestedInput
    aiParticipants?: AIUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateWithoutMessagesInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    owned_by?: IntFieldUpdateOperationsInput | number
    userParticipants?: UserUncheckedUpdateManyWithoutChatroomsNestedInput
    aiParticipants?: AIUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatroomUpdateManyWithoutUserParticipantsNestedInput
    ownedRooms?: ChatroomUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    chatrooms?: ChatroomUncheckedUpdateManyWithoutUserParticipantsNestedInput
    ownedRooms?: ChatroomUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type AIUpsertWithoutMessagesInput = {
    update: XOR<AIUpdateWithoutMessagesInput, AIUncheckedUpdateWithoutMessagesInput>
    create: XOR<AICreateWithoutMessagesInput, AIUncheckedCreateWithoutMessagesInput>
    where?: AIWhereInput
  }

  export type AIUpdateToOneWithWhereWithoutMessagesInput = {
    where?: AIWhereInput
    data: XOR<AIUpdateWithoutMessagesInput, AIUncheckedUpdateWithoutMessagesInput>
  }

  export type AIUpdateWithoutMessagesInput = {
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    chatroom?: ChatroomUpdateOneRequiredWithoutAiParticipantsNestedInput
  }

  export type AIUncheckedUpdateWithoutMessagesInput = {
    ai_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChatroomCreateManyOwnerInput = {
    chatroom_id?: number
    title: string
  }

  export type ChatMessageCreateManyUserSenderInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom_id: number
    ai_sender_id?: number | null
  }

  export type ChatroomUpdateWithoutUserParticipantsInput = {
    title?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutOwnedRoomsNestedInput
    aiParticipants?: AIUpdateManyWithoutChatroomNestedInput
    messages?: ChatMessageUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateWithoutUserParticipantsInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    owned_by?: IntFieldUpdateOperationsInput | number
    aiParticipants?: AIUncheckedUpdateManyWithoutChatroomNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateManyWithoutUserParticipantsInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    owned_by?: IntFieldUpdateOperationsInput | number
  }

  export type ChatroomUpdateWithoutOwnerInput = {
    title?: StringFieldUpdateOperationsInput | string
    userParticipants?: UserUpdateManyWithoutChatroomsNestedInput
    aiParticipants?: AIUpdateManyWithoutChatroomNestedInput
    messages?: ChatMessageUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateWithoutOwnerInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    userParticipants?: UserUncheckedUpdateManyWithoutChatroomsNestedInput
    aiParticipants?: AIUncheckedUpdateManyWithoutChatroomNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatroomNestedInput
  }

  export type ChatroomUncheckedUpdateManyWithoutOwnerInput = {
    chatroom_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUpdateWithoutUserSenderInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: ChatroomUpdateOneRequiredWithoutMessagesNestedInput
    aiSender?: AIUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutUserSenderInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    ai_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutUserSenderInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    ai_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AICreateManyChatroomInput = {
    ai_id?: number
    model: string
    prompt_style: string
  }

  export type ChatMessageCreateManyChatroomInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    user_sender_id?: number | null
    ai_sender_id?: number | null
  }

  export type UserUpdateWithoutChatroomsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ownedRooms?: ChatroomUpdateManyWithoutOwnerNestedInput
    messages?: ChatMessageUpdateManyWithoutUserSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatroomsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    ownedRooms?: ChatroomUncheckedUpdateManyWithoutOwnerNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutUserSenderNestedInput
  }

  export type UserUncheckedUpdateManyWithoutChatroomsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AIUpdateWithoutChatroomInput = {
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    messages?: ChatMessageUpdateManyWithoutAiSenderNestedInput
  }

  export type AIUncheckedUpdateWithoutChatroomInput = {
    ai_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
    messages?: ChatMessageUncheckedUpdateManyWithoutAiSenderNestedInput
  }

  export type AIUncheckedUpdateManyWithoutChatroomInput = {
    ai_id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    prompt_style?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMessageUpdateWithoutChatroomInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    userSender?: UserUpdateOneWithoutMessagesNestedInput
    aiSender?: AIUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatroomInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    ai_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatroomInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
    ai_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageCreateManyAiSenderInput = {
    message_id?: number
    sender_type: $Enums.SenderType
    content: string
    sent_at?: Date | string
    chatroom_id: number
    user_sender_id?: number | null
  }

  export type ChatMessageUpdateWithoutAiSenderInput = {
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom?: ChatroomUpdateOneRequiredWithoutMessagesNestedInput
    userSender?: UserUpdateOneWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutAiSenderInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    user_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChatMessageUncheckedUpdateManyWithoutAiSenderInput = {
    message_id?: IntFieldUpdateOperationsInput | number
    sender_type?: EnumSenderTypeFieldUpdateOperationsInput | $Enums.SenderType
    content?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chatroom_id?: IntFieldUpdateOperationsInput | number
    user_sender_id?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}