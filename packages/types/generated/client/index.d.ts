
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
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Trivia
 * 
 */
export type Trivia = $Result.DefaultSelection<Prisma.$TriviaPayload>
/**
 * Model PlaylistTrivia
 * 
 */
export type PlaylistTrivia = $Result.DefaultSelection<Prisma.$PlaylistTriviaPayload>
/**
 * Model DiscoverCategory
 * 
 */
export type DiscoverCategory = $Result.DefaultSelection<Prisma.$DiscoverCategoryPayload>
/**
 * Model Hint
 * 
 */
export type Hint = $Result.DefaultSelection<Prisma.$HintPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  GAMES: 'GAMES',
  ANIME: 'ANIME',
  TV_SHOWS: 'TV_SHOWS',
  MOVIES: 'MOVIES',
  BOOKS: 'BOOKS',
  COMICS: 'COMICS'
};

export type Category = (typeof Category)[keyof typeof Category]


export const HintType: {
  TEXT: 'TEXT',
  IMAGE: 'IMAGE',
  AUDIO: 'AUDIO'
};

export type HintType = (typeof HintType)[keyof typeof HintType]


export const Visibility: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type Visibility = (typeof Visibility)[keyof typeof Visibility]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type HintType = $Enums.HintType

export const HintType: typeof $Enums.HintType

export type Visibility = $Enums.Visibility

export const Visibility: typeof $Enums.Visibility

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
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
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trivia`: Exposes CRUD operations for the **Trivia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trivias
    * const trivias = await prisma.trivia.findMany()
    * ```
    */
  get trivia(): Prisma.TriviaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistTrivia`: Exposes CRUD operations for the **PlaylistTrivia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistTrivias
    * const playlistTrivias = await prisma.playlistTrivia.findMany()
    * ```
    */
  get playlistTrivia(): Prisma.PlaylistTriviaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discoverCategory`: Exposes CRUD operations for the **DiscoverCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiscoverCategories
    * const discoverCategories = await prisma.discoverCategory.findMany()
    * ```
    */
  get discoverCategory(): Prisma.DiscoverCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hint`: Exposes CRUD operations for the **Hint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hints
    * const hints = await prisma.hint.findMany()
    * ```
    */
  get hint(): Prisma.HintDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    AppUser: 'AppUser',
    Playlist: 'Playlist',
    Trivia: 'Trivia',
    PlaylistTrivia: 'PlaylistTrivia',
    DiscoverCategory: 'DiscoverCategory',
    Hint: 'Hint'
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
      modelProps: "appUser" | "playlist" | "trivia" | "playlistTrivia" | "discoverCategory" | "hint"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Trivia: {
        payload: Prisma.$TriviaPayload<ExtArgs>
        fields: Prisma.TriviaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriviaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriviaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>
          }
          findFirst: {
            args: Prisma.TriviaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriviaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>
          }
          findMany: {
            args: Prisma.TriviaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>[]
          }
          create: {
            args: Prisma.TriviaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>
          }
          createMany: {
            args: Prisma.TriviaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriviaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>[]
          }
          delete: {
            args: Prisma.TriviaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>
          }
          update: {
            args: Prisma.TriviaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>
          }
          deleteMany: {
            args: Prisma.TriviaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriviaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriviaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>[]
          }
          upsert: {
            args: Prisma.TriviaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriviaPayload>
          }
          aggregate: {
            args: Prisma.TriviaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrivia>
          }
          groupBy: {
            args: Prisma.TriviaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriviaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriviaCountArgs<ExtArgs>
            result: $Utils.Optional<TriviaCountAggregateOutputType> | number
          }
        }
      }
      PlaylistTrivia: {
        payload: Prisma.$PlaylistTriviaPayload<ExtArgs>
        fields: Prisma.PlaylistTriviaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistTriviaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistTriviaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>
          }
          findFirst: {
            args: Prisma.PlaylistTriviaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistTriviaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>
          }
          findMany: {
            args: Prisma.PlaylistTriviaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>[]
          }
          create: {
            args: Prisma.PlaylistTriviaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>
          }
          createMany: {
            args: Prisma.PlaylistTriviaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistTriviaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>[]
          }
          delete: {
            args: Prisma.PlaylistTriviaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>
          }
          update: {
            args: Prisma.PlaylistTriviaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistTriviaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistTriviaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistTriviaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistTriviaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistTriviaPayload>
          }
          aggregate: {
            args: Prisma.PlaylistTriviaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistTrivia>
          }
          groupBy: {
            args: Prisma.PlaylistTriviaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistTriviaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistTriviaCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistTriviaCountAggregateOutputType> | number
          }
        }
      }
      DiscoverCategory: {
        payload: Prisma.$DiscoverCategoryPayload<ExtArgs>
        fields: Prisma.DiscoverCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscoverCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscoverCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>
          }
          findFirst: {
            args: Prisma.DiscoverCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscoverCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>
          }
          findMany: {
            args: Prisma.DiscoverCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>[]
          }
          create: {
            args: Prisma.DiscoverCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>
          }
          createMany: {
            args: Prisma.DiscoverCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscoverCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>[]
          }
          delete: {
            args: Prisma.DiscoverCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>
          }
          update: {
            args: Prisma.DiscoverCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>
          }
          deleteMany: {
            args: Prisma.DiscoverCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscoverCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscoverCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>[]
          }
          upsert: {
            args: Prisma.DiscoverCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscoverCategoryPayload>
          }
          aggregate: {
            args: Prisma.DiscoverCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscoverCategory>
          }
          groupBy: {
            args: Prisma.DiscoverCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscoverCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscoverCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<DiscoverCategoryCountAggregateOutputType> | number
          }
        }
      }
      Hint: {
        payload: Prisma.$HintPayload<ExtArgs>
        fields: Prisma.HintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findFirst: {
            args: Prisma.HintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          findMany: {
            args: Prisma.HintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          create: {
            args: Prisma.HintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          createMany: {
            args: Prisma.HintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          delete: {
            args: Prisma.HintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          update: {
            args: Prisma.HintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          deleteMany: {
            args: Prisma.HintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>[]
          }
          upsert: {
            args: Prisma.HintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HintPayload>
          }
          aggregate: {
            args: Prisma.HintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHint>
          }
          groupBy: {
            args: Prisma.HintGroupByArgs<ExtArgs>
            result: $Utils.Optional<HintGroupByOutputType>[]
          }
          count: {
            args: Prisma.HintCountArgs<ExtArgs>
            result: $Utils.Optional<HintCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    appUser?: AppUserOmit
    playlist?: PlaylistOmit
    trivia?: TriviaOmit
    playlistTrivia?: PlaylistTriviaOmit
    discoverCategory?: DiscoverCategoryOmit
    hint?: HintOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AppUserCountOutputType
   */

  export type AppUserCountOutputType = {
    trivia: number
    playlists: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | AppUserCountOutputTypeCountTriviaArgs
    playlists?: boolean | AppUserCountOutputTypeCountPlaylistsArgs
  }

  // Custom InputTypes
  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserCountOutputType
     */
    select?: AppUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountTriviaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriviaWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    trivia: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | PlaylistCountOutputTypeCountTriviaArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountTriviaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTriviaWhereInput
  }


  /**
   * Count Type TriviaCountOutputType
   */

  export type TriviaCountOutputType = {
    PlaylistTrivia: number
  }

  export type TriviaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PlaylistTrivia?: boolean | TriviaCountOutputTypeCountPlaylistTriviaArgs
  }

  // Custom InputTypes
  /**
   * TriviaCountOutputType without action
   */
  export type TriviaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriviaCountOutputType
     */
    select?: TriviaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TriviaCountOutputType without action
   */
  export type TriviaCountOutputTypeCountPlaylistTriviaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTriviaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserAvgAggregateOutputType = {
    level: number | null
  }

  export type AppUserSumAggregateOutputType = {
    level: number | null
  }

  export type AppUserMinAggregateOutputType = {
    id: string | null
    supabaseAuthId: string | null
    email: string | null
    displayName: string | null
    bio: string | null
    profilePicture: string | null
    level: number | null
    createdAt: Date | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: string | null
    supabaseAuthId: string | null
    email: string | null
    displayName: string | null
    bio: string | null
    profilePicture: string | null
    level: number | null
    createdAt: Date | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    supabaseAuthId: number
    email: number
    displayName: number
    bio: number
    profilePicture: number
    level: number
    createdAt: number
    _all: number
  }


  export type AppUserAvgAggregateInputType = {
    level?: true
  }

  export type AppUserSumAggregateInputType = {
    level?: true
  }

  export type AppUserMinAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    email?: true
    displayName?: true
    bio?: true
    profilePicture?: true
    level?: true
    createdAt?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    email?: true
    displayName?: true
    bio?: true
    profilePicture?: true
    level?: true
    createdAt?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    supabaseAuthId?: true
    email?: true
    displayName?: true
    bio?: true
    profilePicture?: true
    level?: true
    createdAt?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _avg?: AppUserAvgAggregateInputType
    _sum?: AppUserSumAggregateInputType
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: string
    supabaseAuthId: string
    email: string
    displayName: string
    bio: string | null
    profilePicture: string | null
    level: number
    createdAt: Date
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    level?: boolean
    createdAt?: boolean
    trivia?: boolean | AppUser$triviaArgs<ExtArgs>
    playlists?: boolean | AppUser$playlistsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supabaseAuthId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    level?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["appUser"]>

  export type AppUserSelectScalar = {
    id?: boolean
    supabaseAuthId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    profilePicture?: boolean
    level?: boolean
    createdAt?: boolean
  }

  export type AppUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supabaseAuthId" | "email" | "displayName" | "bio" | "profilePicture" | "level" | "createdAt", ExtArgs["result"]["appUser"]>
  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | AppUser$triviaArgs<ExtArgs>
    playlists?: boolean | AppUser$playlistsArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      trivia: Prisma.$TriviaPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supabaseAuthId: string
      email: string
      displayName: string
      bio: string | null
      profilePicture: string | null
      level: number
      createdAt: Date
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppUsers and returns the data saved in the database.
     * @param {AppUserCreateManyAndReturnArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AppUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers and returns the data updated in the database.
     * @param {AppUserUpdateManyAndReturnArgs} args - Arguments to update many AppUsers.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppUsers and only return the `id`
     * const appUserWithIdOnly = await prisma.appUser.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends AppUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AppUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
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
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trivia<T extends AppUser$triviaArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$triviaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends AppUser$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AppUser model
   */
  interface AppUserFieldRefs {
    readonly id: FieldRef<"AppUser", 'String'>
    readonly supabaseAuthId: FieldRef<"AppUser", 'String'>
    readonly email: FieldRef<"AppUser", 'String'>
    readonly displayName: FieldRef<"AppUser", 'String'>
    readonly bio: FieldRef<"AppUser", 'String'>
    readonly profilePicture: FieldRef<"AppUser", 'String'>
    readonly level: FieldRef<"AppUser", 'Int'>
    readonly createdAt: FieldRef<"AppUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser createManyAndReturn
   */
  export type AppUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to update.
     */
    limit?: number
  }

  /**
   * AppUser updateManyAndReturn
   */
  export type AppUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to update.
     */
    limit?: number
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
    /**
     * Limit how many AppUsers to delete.
     */
    limit?: number
  }

  /**
   * AppUser.trivia
   */
  export type AppUser$triviaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    where?: TriviaWhereInput
    orderBy?: TriviaOrderByWithRelationInput | TriviaOrderByWithRelationInput[]
    cursor?: TriviaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriviaScalarFieldEnum | TriviaScalarFieldEnum[]
  }

  /**
   * AppUser.playlists
   */
  export type AppUser$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppUser
     */
    omit?: AppUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
    favourites: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
    favourites: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    favourites: number | null
    imageUrl: string | null
    visibility: $Enums.Visibility | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    favourites: number | null
    imageUrl: string | null
    visibility: $Enums.Visibility | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    mediaTags: number
    favourites: number
    imageUrl: number
    visibility: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
    favourites?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
    favourites?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    favourites?: true
    imageUrl?: true
    visibility?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    favourites?: true
    imageUrl?: true
    visibility?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    mediaTags?: true
    favourites?: true
    imageUrl?: true
    visibility?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: number
    name: string
    description: string
    mediaTags: $Enums.Category[]
    favourites: number
    imageUrl: string | null
    visibility: $Enums.Visibility
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mediaTags?: boolean
    favourites?: boolean
    imageUrl?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    trivia?: boolean | Playlist$triviaArgs<ExtArgs>
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mediaTags?: boolean
    favourites?: boolean
    imageUrl?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    mediaTags?: boolean
    favourites?: boolean
    imageUrl?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    mediaTags?: boolean
    favourites?: boolean
    imageUrl?: boolean
    visibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "mediaTags" | "favourites" | "imageUrl" | "visibility" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | Playlist$triviaArgs<ExtArgs>
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      trivia: Prisma.$PlaylistTriviaPayload<ExtArgs>[]
      user: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      mediaTags: $Enums.Category[]
      favourites: number
      imageUrl: string | null
      visibility: $Enums.Visibility
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trivia<T extends Playlist$triviaArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$triviaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'Int'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly mediaTags: FieldRef<"Playlist", 'Category[]'>
    readonly favourites: FieldRef<"Playlist", 'Int'>
    readonly imageUrl: FieldRef<"Playlist", 'String'>
    readonly visibility: FieldRef<"Playlist", 'Visibility'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
    readonly userId: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.trivia
   */
  export type Playlist$triviaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    where?: PlaylistTriviaWhereInput
    orderBy?: PlaylistTriviaOrderByWithRelationInput | PlaylistTriviaOrderByWithRelationInput[]
    cursor?: PlaylistTriviaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistTriviaScalarFieldEnum | PlaylistTriviaScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Trivia
   */

  export type AggregateTrivia = {
    _count: TriviaCountAggregateOutputType | null
    _avg: TriviaAvgAggregateOutputType | null
    _sum: TriviaSumAggregateOutputType | null
    _min: TriviaMinAggregateOutputType | null
    _max: TriviaMaxAggregateOutputType | null
  }

  export type TriviaAvgAggregateOutputType = {
    id: number | null
    highlightStart: number | null
    highlightEnd: number | null
    likes: number | null
    dislikes: number | null
    correctCount: number | null
  }

  export type TriviaSumAggregateOutputType = {
    id: number | null
    highlightStart: number | null
    highlightEnd: number | null
    likes: number | null
    dislikes: number | null
    correctCount: number | null
  }

  export type TriviaMinAggregateOutputType = {
    id: number | null
    userId: string | null
    category: $Enums.Category | null
    title: string | null
    incorrectStatement: string | null
    highlightStart: number | null
    highlightEnd: number | null
    correction: string | null
    comment: string | null
    visibility: $Enums.Visibility | null
    likes: number | null
    dislikes: number | null
    correctCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    category: $Enums.Category | null
    title: string | null
    incorrectStatement: string | null
    highlightStart: number | null
    highlightEnd: number | null
    correction: string | null
    comment: string | null
    visibility: $Enums.Visibility | null
    likes: number | null
    dislikes: number | null
    correctCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TriviaCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    title: number
    incorrectStatement: number
    highlightStart: number
    highlightEnd: number
    correction: number
    tags: number
    comment: number
    visibility: number
    likes: number
    dislikes: number
    correctCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TriviaAvgAggregateInputType = {
    id?: true
    highlightStart?: true
    highlightEnd?: true
    likes?: true
    dislikes?: true
    correctCount?: true
  }

  export type TriviaSumAggregateInputType = {
    id?: true
    highlightStart?: true
    highlightEnd?: true
    likes?: true
    dislikes?: true
    correctCount?: true
  }

  export type TriviaMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    incorrectStatement?: true
    highlightStart?: true
    highlightEnd?: true
    correction?: true
    comment?: true
    visibility?: true
    likes?: true
    dislikes?: true
    correctCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    incorrectStatement?: true
    highlightStart?: true
    highlightEnd?: true
    correction?: true
    comment?: true
    visibility?: true
    likes?: true
    dislikes?: true
    correctCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TriviaCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    title?: true
    incorrectStatement?: true
    highlightStart?: true
    highlightEnd?: true
    correction?: true
    tags?: true
    comment?: true
    visibility?: true
    likes?: true
    dislikes?: true
    correctCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TriviaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trivia to aggregate.
     */
    where?: TriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trivias to fetch.
     */
    orderBy?: TriviaOrderByWithRelationInput | TriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trivias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trivias
    **/
    _count?: true | TriviaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriviaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriviaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriviaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriviaMaxAggregateInputType
  }

  export type GetTriviaAggregateType<T extends TriviaAggregateArgs> = {
        [P in keyof T & keyof AggregateTrivia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrivia[P]>
      : GetScalarType<T[P], AggregateTrivia[P]>
  }




  export type TriviaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriviaWhereInput
    orderBy?: TriviaOrderByWithAggregationInput | TriviaOrderByWithAggregationInput[]
    by: TriviaScalarFieldEnum[] | TriviaScalarFieldEnum
    having?: TriviaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriviaCountAggregateInputType | true
    _avg?: TriviaAvgAggregateInputType
    _sum?: TriviaSumAggregateInputType
    _min?: TriviaMinAggregateInputType
    _max?: TriviaMaxAggregateInputType
  }

  export type TriviaGroupByOutputType = {
    id: number
    userId: string
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags: string[]
    comment: string | null
    visibility: $Enums.Visibility
    likes: number
    dislikes: number
    correctCount: number
    createdAt: Date
    updatedAt: Date
    _count: TriviaCountAggregateOutputType | null
    _avg: TriviaAvgAggregateOutputType | null
    _sum: TriviaSumAggregateOutputType | null
    _min: TriviaMinAggregateOutputType | null
    _max: TriviaMaxAggregateOutputType | null
  }

  type GetTriviaGroupByPayload<T extends TriviaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriviaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriviaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriviaGroupByOutputType[P]>
            : GetScalarType<T[P], TriviaGroupByOutputType[P]>
        }
      >
    >


  export type TriviaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    incorrectStatement?: boolean
    highlightStart?: boolean
    highlightEnd?: boolean
    correction?: boolean
    tags?: boolean
    comment?: boolean
    visibility?: boolean
    likes?: boolean
    dislikes?: boolean
    correctCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    hint?: boolean | Trivia$hintArgs<ExtArgs>
    PlaylistTrivia?: boolean | Trivia$PlaylistTriviaArgs<ExtArgs>
    _count?: boolean | TriviaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trivia"]>

  export type TriviaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    incorrectStatement?: boolean
    highlightStart?: boolean
    highlightEnd?: boolean
    correction?: boolean
    tags?: boolean
    comment?: boolean
    visibility?: boolean
    likes?: boolean
    dislikes?: boolean
    correctCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trivia"]>

  export type TriviaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    incorrectStatement?: boolean
    highlightStart?: boolean
    highlightEnd?: boolean
    correction?: boolean
    tags?: boolean
    comment?: boolean
    visibility?: boolean
    likes?: boolean
    dislikes?: boolean
    correctCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trivia"]>

  export type TriviaSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    title?: boolean
    incorrectStatement?: boolean
    highlightStart?: boolean
    highlightEnd?: boolean
    correction?: boolean
    tags?: boolean
    comment?: boolean
    visibility?: boolean
    likes?: boolean
    dislikes?: boolean
    correctCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TriviaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "title" | "incorrectStatement" | "highlightStart" | "highlightEnd" | "correction" | "tags" | "comment" | "visibility" | "likes" | "dislikes" | "correctCount" | "createdAt" | "updatedAt", ExtArgs["result"]["trivia"]>
  export type TriviaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
    hint?: boolean | Trivia$hintArgs<ExtArgs>
    PlaylistTrivia?: boolean | Trivia$PlaylistTriviaArgs<ExtArgs>
    _count?: boolean | TriviaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TriviaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }
  export type TriviaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $TriviaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trivia"
    objects: {
      user: Prisma.$AppUserPayload<ExtArgs>
      hint: Prisma.$HintPayload<ExtArgs> | null
      PlaylistTrivia: Prisma.$PlaylistTriviaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      category: $Enums.Category
      title: string
      incorrectStatement: string
      highlightStart: number
      highlightEnd: number
      correction: string
      tags: string[]
      comment: string | null
      visibility: $Enums.Visibility
      likes: number
      dislikes: number
      correctCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trivia"]>
    composites: {}
  }

  type TriviaGetPayload<S extends boolean | null | undefined | TriviaDefaultArgs> = $Result.GetResult<Prisma.$TriviaPayload, S>

  type TriviaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriviaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriviaCountAggregateInputType | true
    }

  export interface TriviaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trivia'], meta: { name: 'Trivia' } }
    /**
     * Find zero or one Trivia that matches the filter.
     * @param {TriviaFindUniqueArgs} args - Arguments to find a Trivia
     * @example
     * // Get one Trivia
     * const trivia = await prisma.trivia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriviaFindUniqueArgs>(args: SelectSubset<T, TriviaFindUniqueArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trivia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriviaFindUniqueOrThrowArgs} args - Arguments to find a Trivia
     * @example
     * // Get one Trivia
     * const trivia = await prisma.trivia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriviaFindUniqueOrThrowArgs>(args: SelectSubset<T, TriviaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trivia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaFindFirstArgs} args - Arguments to find a Trivia
     * @example
     * // Get one Trivia
     * const trivia = await prisma.trivia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriviaFindFirstArgs>(args?: SelectSubset<T, TriviaFindFirstArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trivia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaFindFirstOrThrowArgs} args - Arguments to find a Trivia
     * @example
     * // Get one Trivia
     * const trivia = await prisma.trivia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriviaFindFirstOrThrowArgs>(args?: SelectSubset<T, TriviaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trivias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trivias
     * const trivias = await prisma.trivia.findMany()
     * 
     * // Get first 10 Trivias
     * const trivias = await prisma.trivia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triviaWithIdOnly = await prisma.trivia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriviaFindManyArgs>(args?: SelectSubset<T, TriviaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trivia.
     * @param {TriviaCreateArgs} args - Arguments to create a Trivia.
     * @example
     * // Create one Trivia
     * const Trivia = await prisma.trivia.create({
     *   data: {
     *     // ... data to create a Trivia
     *   }
     * })
     * 
     */
    create<T extends TriviaCreateArgs>(args: SelectSubset<T, TriviaCreateArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trivias.
     * @param {TriviaCreateManyArgs} args - Arguments to create many Trivias.
     * @example
     * // Create many Trivias
     * const trivia = await prisma.trivia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriviaCreateManyArgs>(args?: SelectSubset<T, TriviaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trivias and returns the data saved in the database.
     * @param {TriviaCreateManyAndReturnArgs} args - Arguments to create many Trivias.
     * @example
     * // Create many Trivias
     * const trivia = await prisma.trivia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trivias and only return the `id`
     * const triviaWithIdOnly = await prisma.trivia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriviaCreateManyAndReturnArgs>(args?: SelectSubset<T, TriviaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trivia.
     * @param {TriviaDeleteArgs} args - Arguments to delete one Trivia.
     * @example
     * // Delete one Trivia
     * const Trivia = await prisma.trivia.delete({
     *   where: {
     *     // ... filter to delete one Trivia
     *   }
     * })
     * 
     */
    delete<T extends TriviaDeleteArgs>(args: SelectSubset<T, TriviaDeleteArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trivia.
     * @param {TriviaUpdateArgs} args - Arguments to update one Trivia.
     * @example
     * // Update one Trivia
     * const trivia = await prisma.trivia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriviaUpdateArgs>(args: SelectSubset<T, TriviaUpdateArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trivias.
     * @param {TriviaDeleteManyArgs} args - Arguments to filter Trivias to delete.
     * @example
     * // Delete a few Trivias
     * const { count } = await prisma.trivia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriviaDeleteManyArgs>(args?: SelectSubset<T, TriviaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trivias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trivias
     * const trivia = await prisma.trivia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriviaUpdateManyArgs>(args: SelectSubset<T, TriviaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trivias and returns the data updated in the database.
     * @param {TriviaUpdateManyAndReturnArgs} args - Arguments to update many Trivias.
     * @example
     * // Update many Trivias
     * const trivia = await prisma.trivia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trivias and only return the `id`
     * const triviaWithIdOnly = await prisma.trivia.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TriviaUpdateManyAndReturnArgs>(args: SelectSubset<T, TriviaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trivia.
     * @param {TriviaUpsertArgs} args - Arguments to update or create a Trivia.
     * @example
     * // Update or create a Trivia
     * const trivia = await prisma.trivia.upsert({
     *   create: {
     *     // ... data to create a Trivia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trivia we want to update
     *   }
     * })
     */
    upsert<T extends TriviaUpsertArgs>(args: SelectSubset<T, TriviaUpsertArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trivias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaCountArgs} args - Arguments to filter Trivias to count.
     * @example
     * // Count the number of Trivias
     * const count = await prisma.trivia.count({
     *   where: {
     *     // ... the filter for the Trivias we want to count
     *   }
     * })
    **/
    count<T extends TriviaCountArgs>(
      args?: Subset<T, TriviaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriviaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trivia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriviaAggregateArgs>(args: Subset<T, TriviaAggregateArgs>): Prisma.PrismaPromise<GetTriviaAggregateType<T>>

    /**
     * Group by Trivia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriviaGroupByArgs} args - Group by arguments.
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
      T extends TriviaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriviaGroupByArgs['orderBy'] }
        : { orderBy?: TriviaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriviaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriviaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trivia model
   */
  readonly fields: TriviaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trivia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriviaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    hint<T extends Trivia$hintArgs<ExtArgs> = {}>(args?: Subset<T, Trivia$hintArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    PlaylistTrivia<T extends Trivia$PlaylistTriviaArgs<ExtArgs> = {}>(args?: Subset<T, Trivia$PlaylistTriviaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trivia model
   */
  interface TriviaFieldRefs {
    readonly id: FieldRef<"Trivia", 'Int'>
    readonly userId: FieldRef<"Trivia", 'String'>
    readonly category: FieldRef<"Trivia", 'Category'>
    readonly title: FieldRef<"Trivia", 'String'>
    readonly incorrectStatement: FieldRef<"Trivia", 'String'>
    readonly highlightStart: FieldRef<"Trivia", 'Int'>
    readonly highlightEnd: FieldRef<"Trivia", 'Int'>
    readonly correction: FieldRef<"Trivia", 'String'>
    readonly tags: FieldRef<"Trivia", 'String[]'>
    readonly comment: FieldRef<"Trivia", 'String'>
    readonly visibility: FieldRef<"Trivia", 'Visibility'>
    readonly likes: FieldRef<"Trivia", 'Int'>
    readonly dislikes: FieldRef<"Trivia", 'Int'>
    readonly correctCount: FieldRef<"Trivia", 'Int'>
    readonly createdAt: FieldRef<"Trivia", 'DateTime'>
    readonly updatedAt: FieldRef<"Trivia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trivia findUnique
   */
  export type TriviaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * Filter, which Trivia to fetch.
     */
    where: TriviaWhereUniqueInput
  }

  /**
   * Trivia findUniqueOrThrow
   */
  export type TriviaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * Filter, which Trivia to fetch.
     */
    where: TriviaWhereUniqueInput
  }

  /**
   * Trivia findFirst
   */
  export type TriviaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * Filter, which Trivia to fetch.
     */
    where?: TriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trivias to fetch.
     */
    orderBy?: TriviaOrderByWithRelationInput | TriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trivias.
     */
    cursor?: TriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trivias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trivias.
     */
    distinct?: TriviaScalarFieldEnum | TriviaScalarFieldEnum[]
  }

  /**
   * Trivia findFirstOrThrow
   */
  export type TriviaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * Filter, which Trivia to fetch.
     */
    where?: TriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trivias to fetch.
     */
    orderBy?: TriviaOrderByWithRelationInput | TriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trivias.
     */
    cursor?: TriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trivias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trivias.
     */
    distinct?: TriviaScalarFieldEnum | TriviaScalarFieldEnum[]
  }

  /**
   * Trivia findMany
   */
  export type TriviaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * Filter, which Trivias to fetch.
     */
    where?: TriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trivias to fetch.
     */
    orderBy?: TriviaOrderByWithRelationInput | TriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trivias.
     */
    cursor?: TriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trivias.
     */
    skip?: number
    distinct?: TriviaScalarFieldEnum | TriviaScalarFieldEnum[]
  }

  /**
   * Trivia create
   */
  export type TriviaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * The data needed to create a Trivia.
     */
    data: XOR<TriviaCreateInput, TriviaUncheckedCreateInput>
  }

  /**
   * Trivia createMany
   */
  export type TriviaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trivias.
     */
    data: TriviaCreateManyInput | TriviaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trivia createManyAndReturn
   */
  export type TriviaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * The data used to create many Trivias.
     */
    data: TriviaCreateManyInput | TriviaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trivia update
   */
  export type TriviaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * The data needed to update a Trivia.
     */
    data: XOR<TriviaUpdateInput, TriviaUncheckedUpdateInput>
    /**
     * Choose, which Trivia to update.
     */
    where: TriviaWhereUniqueInput
  }

  /**
   * Trivia updateMany
   */
  export type TriviaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trivias.
     */
    data: XOR<TriviaUpdateManyMutationInput, TriviaUncheckedUpdateManyInput>
    /**
     * Filter which Trivias to update
     */
    where?: TriviaWhereInput
    /**
     * Limit how many Trivias to update.
     */
    limit?: number
  }

  /**
   * Trivia updateManyAndReturn
   */
  export type TriviaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * The data used to update Trivias.
     */
    data: XOR<TriviaUpdateManyMutationInput, TriviaUncheckedUpdateManyInput>
    /**
     * Filter which Trivias to update
     */
    where?: TriviaWhereInput
    /**
     * Limit how many Trivias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trivia upsert
   */
  export type TriviaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * The filter to search for the Trivia to update in case it exists.
     */
    where: TriviaWhereUniqueInput
    /**
     * In case the Trivia found by the `where` argument doesn't exist, create a new Trivia with this data.
     */
    create: XOR<TriviaCreateInput, TriviaUncheckedCreateInput>
    /**
     * In case the Trivia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriviaUpdateInput, TriviaUncheckedUpdateInput>
  }

  /**
   * Trivia delete
   */
  export type TriviaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
    /**
     * Filter which Trivia to delete.
     */
    where: TriviaWhereUniqueInput
  }

  /**
   * Trivia deleteMany
   */
  export type TriviaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trivias to delete
     */
    where?: TriviaWhereInput
    /**
     * Limit how many Trivias to delete.
     */
    limit?: number
  }

  /**
   * Trivia.hint
   */
  export type Trivia$hintArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    where?: HintWhereInput
  }

  /**
   * Trivia.PlaylistTrivia
   */
  export type Trivia$PlaylistTriviaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    where?: PlaylistTriviaWhereInput
    orderBy?: PlaylistTriviaOrderByWithRelationInput | PlaylistTriviaOrderByWithRelationInput[]
    cursor?: PlaylistTriviaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistTriviaScalarFieldEnum | PlaylistTriviaScalarFieldEnum[]
  }

  /**
   * Trivia without action
   */
  export type TriviaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trivia
     */
    select?: TriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trivia
     */
    omit?: TriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriviaInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistTrivia
   */

  export type AggregatePlaylistTrivia = {
    _count: PlaylistTriviaCountAggregateOutputType | null
    _avg: PlaylistTriviaAvgAggregateOutputType | null
    _sum: PlaylistTriviaSumAggregateOutputType | null
    _min: PlaylistTriviaMinAggregateOutputType | null
    _max: PlaylistTriviaMaxAggregateOutputType | null
  }

  export type PlaylistTriviaAvgAggregateOutputType = {
    playlistId: number | null
    triviaId: number | null
  }

  export type PlaylistTriviaSumAggregateOutputType = {
    playlistId: number | null
    triviaId: number | null
  }

  export type PlaylistTriviaMinAggregateOutputType = {
    playlistId: number | null
    triviaId: number | null
  }

  export type PlaylistTriviaMaxAggregateOutputType = {
    playlistId: number | null
    triviaId: number | null
  }

  export type PlaylistTriviaCountAggregateOutputType = {
    playlistId: number
    triviaId: number
    _all: number
  }


  export type PlaylistTriviaAvgAggregateInputType = {
    playlistId?: true
    triviaId?: true
  }

  export type PlaylistTriviaSumAggregateInputType = {
    playlistId?: true
    triviaId?: true
  }

  export type PlaylistTriviaMinAggregateInputType = {
    playlistId?: true
    triviaId?: true
  }

  export type PlaylistTriviaMaxAggregateInputType = {
    playlistId?: true
    triviaId?: true
  }

  export type PlaylistTriviaCountAggregateInputType = {
    playlistId?: true
    triviaId?: true
    _all?: true
  }

  export type PlaylistTriviaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTrivia to aggregate.
     */
    where?: PlaylistTriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTrivias to fetch.
     */
    orderBy?: PlaylistTriviaOrderByWithRelationInput | PlaylistTriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistTriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTrivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTrivias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistTrivias
    **/
    _count?: true | PlaylistTriviaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistTriviaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistTriviaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistTriviaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistTriviaMaxAggregateInputType
  }

  export type GetPlaylistTriviaAggregateType<T extends PlaylistTriviaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistTrivia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistTrivia[P]>
      : GetScalarType<T[P], AggregatePlaylistTrivia[P]>
  }




  export type PlaylistTriviaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistTriviaWhereInput
    orderBy?: PlaylistTriviaOrderByWithAggregationInput | PlaylistTriviaOrderByWithAggregationInput[]
    by: PlaylistTriviaScalarFieldEnum[] | PlaylistTriviaScalarFieldEnum
    having?: PlaylistTriviaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistTriviaCountAggregateInputType | true
    _avg?: PlaylistTriviaAvgAggregateInputType
    _sum?: PlaylistTriviaSumAggregateInputType
    _min?: PlaylistTriviaMinAggregateInputType
    _max?: PlaylistTriviaMaxAggregateInputType
  }

  export type PlaylistTriviaGroupByOutputType = {
    playlistId: number
    triviaId: number
    _count: PlaylistTriviaCountAggregateOutputType | null
    _avg: PlaylistTriviaAvgAggregateOutputType | null
    _sum: PlaylistTriviaSumAggregateOutputType | null
    _min: PlaylistTriviaMinAggregateOutputType | null
    _max: PlaylistTriviaMaxAggregateOutputType | null
  }

  type GetPlaylistTriviaGroupByPayload<T extends PlaylistTriviaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistTriviaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistTriviaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistTriviaGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistTriviaGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistTriviaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlistId?: boolean
    triviaId?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrivia"]>

  export type PlaylistTriviaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlistId?: boolean
    triviaId?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrivia"]>

  export type PlaylistTriviaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playlistId?: boolean
    triviaId?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistTrivia"]>

  export type PlaylistTriviaSelectScalar = {
    playlistId?: boolean
    triviaId?: boolean
  }

  export type PlaylistTriviaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"playlistId" | "triviaId", ExtArgs["result"]["playlistTrivia"]>
  export type PlaylistTriviaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }
  export type PlaylistTriviaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }
  export type PlaylistTriviaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }

  export type $PlaylistTriviaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistTrivia"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      trivia: Prisma.$TriviaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      playlistId: number
      triviaId: number
    }, ExtArgs["result"]["playlistTrivia"]>
    composites: {}
  }

  type PlaylistTriviaGetPayload<S extends boolean | null | undefined | PlaylistTriviaDefaultArgs> = $Result.GetResult<Prisma.$PlaylistTriviaPayload, S>

  type PlaylistTriviaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistTriviaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistTriviaCountAggregateInputType | true
    }

  export interface PlaylistTriviaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistTrivia'], meta: { name: 'PlaylistTrivia' } }
    /**
     * Find zero or one PlaylistTrivia that matches the filter.
     * @param {PlaylistTriviaFindUniqueArgs} args - Arguments to find a PlaylistTrivia
     * @example
     * // Get one PlaylistTrivia
     * const playlistTrivia = await prisma.playlistTrivia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistTriviaFindUniqueArgs>(args: SelectSubset<T, PlaylistTriviaFindUniqueArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistTrivia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistTriviaFindUniqueOrThrowArgs} args - Arguments to find a PlaylistTrivia
     * @example
     * // Get one PlaylistTrivia
     * const playlistTrivia = await prisma.playlistTrivia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistTriviaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistTriviaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistTrivia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaFindFirstArgs} args - Arguments to find a PlaylistTrivia
     * @example
     * // Get one PlaylistTrivia
     * const playlistTrivia = await prisma.playlistTrivia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistTriviaFindFirstArgs>(args?: SelectSubset<T, PlaylistTriviaFindFirstArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistTrivia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaFindFirstOrThrowArgs} args - Arguments to find a PlaylistTrivia
     * @example
     * // Get one PlaylistTrivia
     * const playlistTrivia = await prisma.playlistTrivia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistTriviaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistTriviaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistTrivias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistTrivias
     * const playlistTrivias = await prisma.playlistTrivia.findMany()
     * 
     * // Get first 10 PlaylistTrivias
     * const playlistTrivias = await prisma.playlistTrivia.findMany({ take: 10 })
     * 
     * // Only select the `playlistId`
     * const playlistTriviaWithPlaylistIdOnly = await prisma.playlistTrivia.findMany({ select: { playlistId: true } })
     * 
     */
    findMany<T extends PlaylistTriviaFindManyArgs>(args?: SelectSubset<T, PlaylistTriviaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistTrivia.
     * @param {PlaylistTriviaCreateArgs} args - Arguments to create a PlaylistTrivia.
     * @example
     * // Create one PlaylistTrivia
     * const PlaylistTrivia = await prisma.playlistTrivia.create({
     *   data: {
     *     // ... data to create a PlaylistTrivia
     *   }
     * })
     * 
     */
    create<T extends PlaylistTriviaCreateArgs>(args: SelectSubset<T, PlaylistTriviaCreateArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistTrivias.
     * @param {PlaylistTriviaCreateManyArgs} args - Arguments to create many PlaylistTrivias.
     * @example
     * // Create many PlaylistTrivias
     * const playlistTrivia = await prisma.playlistTrivia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistTriviaCreateManyArgs>(args?: SelectSubset<T, PlaylistTriviaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistTrivias and returns the data saved in the database.
     * @param {PlaylistTriviaCreateManyAndReturnArgs} args - Arguments to create many PlaylistTrivias.
     * @example
     * // Create many PlaylistTrivias
     * const playlistTrivia = await prisma.playlistTrivia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistTrivias and only return the `playlistId`
     * const playlistTriviaWithPlaylistIdOnly = await prisma.playlistTrivia.createManyAndReturn({
     *   select: { playlistId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistTriviaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistTriviaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistTrivia.
     * @param {PlaylistTriviaDeleteArgs} args - Arguments to delete one PlaylistTrivia.
     * @example
     * // Delete one PlaylistTrivia
     * const PlaylistTrivia = await prisma.playlistTrivia.delete({
     *   where: {
     *     // ... filter to delete one PlaylistTrivia
     *   }
     * })
     * 
     */
    delete<T extends PlaylistTriviaDeleteArgs>(args: SelectSubset<T, PlaylistTriviaDeleteArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistTrivia.
     * @param {PlaylistTriviaUpdateArgs} args - Arguments to update one PlaylistTrivia.
     * @example
     * // Update one PlaylistTrivia
     * const playlistTrivia = await prisma.playlistTrivia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistTriviaUpdateArgs>(args: SelectSubset<T, PlaylistTriviaUpdateArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistTrivias.
     * @param {PlaylistTriviaDeleteManyArgs} args - Arguments to filter PlaylistTrivias to delete.
     * @example
     * // Delete a few PlaylistTrivias
     * const { count } = await prisma.playlistTrivia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistTriviaDeleteManyArgs>(args?: SelectSubset<T, PlaylistTriviaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTrivias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistTrivias
     * const playlistTrivia = await prisma.playlistTrivia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistTriviaUpdateManyArgs>(args: SelectSubset<T, PlaylistTriviaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistTrivias and returns the data updated in the database.
     * @param {PlaylistTriviaUpdateManyAndReturnArgs} args - Arguments to update many PlaylistTrivias.
     * @example
     * // Update many PlaylistTrivias
     * const playlistTrivia = await prisma.playlistTrivia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistTrivias and only return the `playlistId`
     * const playlistTriviaWithPlaylistIdOnly = await prisma.playlistTrivia.updateManyAndReturn({
     *   select: { playlistId: true },
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
    updateManyAndReturn<T extends PlaylistTriviaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistTriviaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistTrivia.
     * @param {PlaylistTriviaUpsertArgs} args - Arguments to update or create a PlaylistTrivia.
     * @example
     * // Update or create a PlaylistTrivia
     * const playlistTrivia = await prisma.playlistTrivia.upsert({
     *   create: {
     *     // ... data to create a PlaylistTrivia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistTrivia we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistTriviaUpsertArgs>(args: SelectSubset<T, PlaylistTriviaUpsertArgs<ExtArgs>>): Prisma__PlaylistTriviaClient<$Result.GetResult<Prisma.$PlaylistTriviaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistTrivias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaCountArgs} args - Arguments to filter PlaylistTrivias to count.
     * @example
     * // Count the number of PlaylistTrivias
     * const count = await prisma.playlistTrivia.count({
     *   where: {
     *     // ... the filter for the PlaylistTrivias we want to count
     *   }
     * })
    **/
    count<T extends PlaylistTriviaCountArgs>(
      args?: Subset<T, PlaylistTriviaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistTriviaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistTrivia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistTriviaAggregateArgs>(args: Subset<T, PlaylistTriviaAggregateArgs>): Prisma.PrismaPromise<GetPlaylistTriviaAggregateType<T>>

    /**
     * Group by PlaylistTrivia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistTriviaGroupByArgs} args - Group by arguments.
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
      T extends PlaylistTriviaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistTriviaGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistTriviaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistTriviaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistTriviaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistTrivia model
   */
  readonly fields: PlaylistTriviaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistTrivia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistTriviaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trivia<T extends TriviaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TriviaDefaultArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlaylistTrivia model
   */
  interface PlaylistTriviaFieldRefs {
    readonly playlistId: FieldRef<"PlaylistTrivia", 'Int'>
    readonly triviaId: FieldRef<"PlaylistTrivia", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistTrivia findUnique
   */
  export type PlaylistTriviaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrivia to fetch.
     */
    where: PlaylistTriviaWhereUniqueInput
  }

  /**
   * PlaylistTrivia findUniqueOrThrow
   */
  export type PlaylistTriviaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrivia to fetch.
     */
    where: PlaylistTriviaWhereUniqueInput
  }

  /**
   * PlaylistTrivia findFirst
   */
  export type PlaylistTriviaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrivia to fetch.
     */
    where?: PlaylistTriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTrivias to fetch.
     */
    orderBy?: PlaylistTriviaOrderByWithRelationInput | PlaylistTriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTrivias.
     */
    cursor?: PlaylistTriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTrivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTrivias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTrivias.
     */
    distinct?: PlaylistTriviaScalarFieldEnum | PlaylistTriviaScalarFieldEnum[]
  }

  /**
   * PlaylistTrivia findFirstOrThrow
   */
  export type PlaylistTriviaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrivia to fetch.
     */
    where?: PlaylistTriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTrivias to fetch.
     */
    orderBy?: PlaylistTriviaOrderByWithRelationInput | PlaylistTriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistTrivias.
     */
    cursor?: PlaylistTriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTrivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTrivias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistTrivias.
     */
    distinct?: PlaylistTriviaScalarFieldEnum | PlaylistTriviaScalarFieldEnum[]
  }

  /**
   * PlaylistTrivia findMany
   */
  export type PlaylistTriviaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistTrivias to fetch.
     */
    where?: PlaylistTriviaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistTrivias to fetch.
     */
    orderBy?: PlaylistTriviaOrderByWithRelationInput | PlaylistTriviaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistTrivias.
     */
    cursor?: PlaylistTriviaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistTrivias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistTrivias.
     */
    skip?: number
    distinct?: PlaylistTriviaScalarFieldEnum | PlaylistTriviaScalarFieldEnum[]
  }

  /**
   * PlaylistTrivia create
   */
  export type PlaylistTriviaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistTrivia.
     */
    data: XOR<PlaylistTriviaCreateInput, PlaylistTriviaUncheckedCreateInput>
  }

  /**
   * PlaylistTrivia createMany
   */
  export type PlaylistTriviaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistTrivias.
     */
    data: PlaylistTriviaCreateManyInput | PlaylistTriviaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistTrivia createManyAndReturn
   */
  export type PlaylistTriviaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistTrivias.
     */
    data: PlaylistTriviaCreateManyInput | PlaylistTriviaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistTrivia update
   */
  export type PlaylistTriviaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistTrivia.
     */
    data: XOR<PlaylistTriviaUpdateInput, PlaylistTriviaUncheckedUpdateInput>
    /**
     * Choose, which PlaylistTrivia to update.
     */
    where: PlaylistTriviaWhereUniqueInput
  }

  /**
   * PlaylistTrivia updateMany
   */
  export type PlaylistTriviaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistTrivias.
     */
    data: XOR<PlaylistTriviaUpdateManyMutationInput, PlaylistTriviaUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTrivias to update
     */
    where?: PlaylistTriviaWhereInput
    /**
     * Limit how many PlaylistTrivias to update.
     */
    limit?: number
  }

  /**
   * PlaylistTrivia updateManyAndReturn
   */
  export type PlaylistTriviaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistTrivias.
     */
    data: XOR<PlaylistTriviaUpdateManyMutationInput, PlaylistTriviaUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistTrivias to update
     */
    where?: PlaylistTriviaWhereInput
    /**
     * Limit how many PlaylistTrivias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistTrivia upsert
   */
  export type PlaylistTriviaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistTrivia to update in case it exists.
     */
    where: PlaylistTriviaWhereUniqueInput
    /**
     * In case the PlaylistTrivia found by the `where` argument doesn't exist, create a new PlaylistTrivia with this data.
     */
    create: XOR<PlaylistTriviaCreateInput, PlaylistTriviaUncheckedCreateInput>
    /**
     * In case the PlaylistTrivia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistTriviaUpdateInput, PlaylistTriviaUncheckedUpdateInput>
  }

  /**
   * PlaylistTrivia delete
   */
  export type PlaylistTriviaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
    /**
     * Filter which PlaylistTrivia to delete.
     */
    where: PlaylistTriviaWhereUniqueInput
  }

  /**
   * PlaylistTrivia deleteMany
   */
  export type PlaylistTriviaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistTrivias to delete
     */
    where?: PlaylistTriviaWhereInput
    /**
     * Limit how many PlaylistTrivias to delete.
     */
    limit?: number
  }

  /**
   * PlaylistTrivia without action
   */
  export type PlaylistTriviaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistTrivia
     */
    select?: PlaylistTriviaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistTrivia
     */
    omit?: PlaylistTriviaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistTriviaInclude<ExtArgs> | null
  }


  /**
   * Model DiscoverCategory
   */

  export type AggregateDiscoverCategory = {
    _count: DiscoverCategoryCountAggregateOutputType | null
    _avg: DiscoverCategoryAvgAggregateOutputType | null
    _sum: DiscoverCategorySumAggregateOutputType | null
    _min: DiscoverCategoryMinAggregateOutputType | null
    _max: DiscoverCategoryMaxAggregateOutputType | null
  }

  export type DiscoverCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type DiscoverCategorySumAggregateOutputType = {
    id: number | null
  }

  export type DiscoverCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
  }

  export type DiscoverCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    imageUrl: string | null
  }

  export type DiscoverCategoryCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    _all: number
  }


  export type DiscoverCategoryAvgAggregateInputType = {
    id?: true
  }

  export type DiscoverCategorySumAggregateInputType = {
    id?: true
  }

  export type DiscoverCategoryMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
  }

  export type DiscoverCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
  }

  export type DiscoverCategoryCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    _all?: true
  }

  export type DiscoverCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoverCategory to aggregate.
     */
    where?: DiscoverCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverCategories to fetch.
     */
    orderBy?: DiscoverCategoryOrderByWithRelationInput | DiscoverCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscoverCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiscoverCategories
    **/
    _count?: true | DiscoverCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscoverCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscoverCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscoverCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscoverCategoryMaxAggregateInputType
  }

  export type GetDiscoverCategoryAggregateType<T extends DiscoverCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscoverCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscoverCategory[P]>
      : GetScalarType<T[P], AggregateDiscoverCategory[P]>
  }




  export type DiscoverCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscoverCategoryWhereInput
    orderBy?: DiscoverCategoryOrderByWithAggregationInput | DiscoverCategoryOrderByWithAggregationInput[]
    by: DiscoverCategoryScalarFieldEnum[] | DiscoverCategoryScalarFieldEnum
    having?: DiscoverCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscoverCategoryCountAggregateInputType | true
    _avg?: DiscoverCategoryAvgAggregateInputType
    _sum?: DiscoverCategorySumAggregateInputType
    _min?: DiscoverCategoryMinAggregateInputType
    _max?: DiscoverCategoryMaxAggregateInputType
  }

  export type DiscoverCategoryGroupByOutputType = {
    id: number
    name: string
    imageUrl: string | null
    _count: DiscoverCategoryCountAggregateOutputType | null
    _avg: DiscoverCategoryAvgAggregateOutputType | null
    _sum: DiscoverCategorySumAggregateOutputType | null
    _min: DiscoverCategoryMinAggregateOutputType | null
    _max: DiscoverCategoryMaxAggregateOutputType | null
  }

  type GetDiscoverCategoryGroupByPayload<T extends DiscoverCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscoverCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscoverCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscoverCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], DiscoverCategoryGroupByOutputType[P]>
        }
      >
    >


  export type DiscoverCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["discoverCategory"]>

  export type DiscoverCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["discoverCategory"]>

  export type DiscoverCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["discoverCategory"]>

  export type DiscoverCategorySelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
  }

  export type DiscoverCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "imageUrl", ExtArgs["result"]["discoverCategory"]>

  export type $DiscoverCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiscoverCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      imageUrl: string | null
    }, ExtArgs["result"]["discoverCategory"]>
    composites: {}
  }

  type DiscoverCategoryGetPayload<S extends boolean | null | undefined | DiscoverCategoryDefaultArgs> = $Result.GetResult<Prisma.$DiscoverCategoryPayload, S>

  type DiscoverCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscoverCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscoverCategoryCountAggregateInputType | true
    }

  export interface DiscoverCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiscoverCategory'], meta: { name: 'DiscoverCategory' } }
    /**
     * Find zero or one DiscoverCategory that matches the filter.
     * @param {DiscoverCategoryFindUniqueArgs} args - Arguments to find a DiscoverCategory
     * @example
     * // Get one DiscoverCategory
     * const discoverCategory = await prisma.discoverCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscoverCategoryFindUniqueArgs>(args: SelectSubset<T, DiscoverCategoryFindUniqueArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiscoverCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscoverCategoryFindUniqueOrThrowArgs} args - Arguments to find a DiscoverCategory
     * @example
     * // Get one DiscoverCategory
     * const discoverCategory = await prisma.discoverCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscoverCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscoverCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscoverCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryFindFirstArgs} args - Arguments to find a DiscoverCategory
     * @example
     * // Get one DiscoverCategory
     * const discoverCategory = await prisma.discoverCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscoverCategoryFindFirstArgs>(args?: SelectSubset<T, DiscoverCategoryFindFirstArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiscoverCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryFindFirstOrThrowArgs} args - Arguments to find a DiscoverCategory
     * @example
     * // Get one DiscoverCategory
     * const discoverCategory = await prisma.discoverCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscoverCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscoverCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiscoverCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiscoverCategories
     * const discoverCategories = await prisma.discoverCategory.findMany()
     * 
     * // Get first 10 DiscoverCategories
     * const discoverCategories = await prisma.discoverCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discoverCategoryWithIdOnly = await prisma.discoverCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscoverCategoryFindManyArgs>(args?: SelectSubset<T, DiscoverCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiscoverCategory.
     * @param {DiscoverCategoryCreateArgs} args - Arguments to create a DiscoverCategory.
     * @example
     * // Create one DiscoverCategory
     * const DiscoverCategory = await prisma.discoverCategory.create({
     *   data: {
     *     // ... data to create a DiscoverCategory
     *   }
     * })
     * 
     */
    create<T extends DiscoverCategoryCreateArgs>(args: SelectSubset<T, DiscoverCategoryCreateArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiscoverCategories.
     * @param {DiscoverCategoryCreateManyArgs} args - Arguments to create many DiscoverCategories.
     * @example
     * // Create many DiscoverCategories
     * const discoverCategory = await prisma.discoverCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscoverCategoryCreateManyArgs>(args?: SelectSubset<T, DiscoverCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DiscoverCategories and returns the data saved in the database.
     * @param {DiscoverCategoryCreateManyAndReturnArgs} args - Arguments to create many DiscoverCategories.
     * @example
     * // Create many DiscoverCategories
     * const discoverCategory = await prisma.discoverCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DiscoverCategories and only return the `id`
     * const discoverCategoryWithIdOnly = await prisma.discoverCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscoverCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscoverCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DiscoverCategory.
     * @param {DiscoverCategoryDeleteArgs} args - Arguments to delete one DiscoverCategory.
     * @example
     * // Delete one DiscoverCategory
     * const DiscoverCategory = await prisma.discoverCategory.delete({
     *   where: {
     *     // ... filter to delete one DiscoverCategory
     *   }
     * })
     * 
     */
    delete<T extends DiscoverCategoryDeleteArgs>(args: SelectSubset<T, DiscoverCategoryDeleteArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiscoverCategory.
     * @param {DiscoverCategoryUpdateArgs} args - Arguments to update one DiscoverCategory.
     * @example
     * // Update one DiscoverCategory
     * const discoverCategory = await prisma.discoverCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscoverCategoryUpdateArgs>(args: SelectSubset<T, DiscoverCategoryUpdateArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiscoverCategories.
     * @param {DiscoverCategoryDeleteManyArgs} args - Arguments to filter DiscoverCategories to delete.
     * @example
     * // Delete a few DiscoverCategories
     * const { count } = await prisma.discoverCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscoverCategoryDeleteManyArgs>(args?: SelectSubset<T, DiscoverCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscoverCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiscoverCategories
     * const discoverCategory = await prisma.discoverCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscoverCategoryUpdateManyArgs>(args: SelectSubset<T, DiscoverCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiscoverCategories and returns the data updated in the database.
     * @param {DiscoverCategoryUpdateManyAndReturnArgs} args - Arguments to update many DiscoverCategories.
     * @example
     * // Update many DiscoverCategories
     * const discoverCategory = await prisma.discoverCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DiscoverCategories and only return the `id`
     * const discoverCategoryWithIdOnly = await prisma.discoverCategory.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DiscoverCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscoverCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DiscoverCategory.
     * @param {DiscoverCategoryUpsertArgs} args - Arguments to update or create a DiscoverCategory.
     * @example
     * // Update or create a DiscoverCategory
     * const discoverCategory = await prisma.discoverCategory.upsert({
     *   create: {
     *     // ... data to create a DiscoverCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiscoverCategory we want to update
     *   }
     * })
     */
    upsert<T extends DiscoverCategoryUpsertArgs>(args: SelectSubset<T, DiscoverCategoryUpsertArgs<ExtArgs>>): Prisma__DiscoverCategoryClient<$Result.GetResult<Prisma.$DiscoverCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiscoverCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryCountArgs} args - Arguments to filter DiscoverCategories to count.
     * @example
     * // Count the number of DiscoverCategories
     * const count = await prisma.discoverCategory.count({
     *   where: {
     *     // ... the filter for the DiscoverCategories we want to count
     *   }
     * })
    **/
    count<T extends DiscoverCategoryCountArgs>(
      args?: Subset<T, DiscoverCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscoverCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiscoverCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscoverCategoryAggregateArgs>(args: Subset<T, DiscoverCategoryAggregateArgs>): Prisma.PrismaPromise<GetDiscoverCategoryAggregateType<T>>

    /**
     * Group by DiscoverCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscoverCategoryGroupByArgs} args - Group by arguments.
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
      T extends DiscoverCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscoverCategoryGroupByArgs['orderBy'] }
        : { orderBy?: DiscoverCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscoverCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscoverCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiscoverCategory model
   */
  readonly fields: DiscoverCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiscoverCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscoverCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DiscoverCategory model
   */
  interface DiscoverCategoryFieldRefs {
    readonly id: FieldRef<"DiscoverCategory", 'Int'>
    readonly name: FieldRef<"DiscoverCategory", 'String'>
    readonly imageUrl: FieldRef<"DiscoverCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DiscoverCategory findUnique
   */
  export type DiscoverCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * Filter, which DiscoverCategory to fetch.
     */
    where: DiscoverCategoryWhereUniqueInput
  }

  /**
   * DiscoverCategory findUniqueOrThrow
   */
  export type DiscoverCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * Filter, which DiscoverCategory to fetch.
     */
    where: DiscoverCategoryWhereUniqueInput
  }

  /**
   * DiscoverCategory findFirst
   */
  export type DiscoverCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * Filter, which DiscoverCategory to fetch.
     */
    where?: DiscoverCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverCategories to fetch.
     */
    orderBy?: DiscoverCategoryOrderByWithRelationInput | DiscoverCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoverCategories.
     */
    cursor?: DiscoverCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoverCategories.
     */
    distinct?: DiscoverCategoryScalarFieldEnum | DiscoverCategoryScalarFieldEnum[]
  }

  /**
   * DiscoverCategory findFirstOrThrow
   */
  export type DiscoverCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * Filter, which DiscoverCategory to fetch.
     */
    where?: DiscoverCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverCategories to fetch.
     */
    orderBy?: DiscoverCategoryOrderByWithRelationInput | DiscoverCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiscoverCategories.
     */
    cursor?: DiscoverCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiscoverCategories.
     */
    distinct?: DiscoverCategoryScalarFieldEnum | DiscoverCategoryScalarFieldEnum[]
  }

  /**
   * DiscoverCategory findMany
   */
  export type DiscoverCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * Filter, which DiscoverCategories to fetch.
     */
    where?: DiscoverCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiscoverCategories to fetch.
     */
    orderBy?: DiscoverCategoryOrderByWithRelationInput | DiscoverCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiscoverCategories.
     */
    cursor?: DiscoverCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiscoverCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiscoverCategories.
     */
    skip?: number
    distinct?: DiscoverCategoryScalarFieldEnum | DiscoverCategoryScalarFieldEnum[]
  }

  /**
   * DiscoverCategory create
   */
  export type DiscoverCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a DiscoverCategory.
     */
    data: XOR<DiscoverCategoryCreateInput, DiscoverCategoryUncheckedCreateInput>
  }

  /**
   * DiscoverCategory createMany
   */
  export type DiscoverCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiscoverCategories.
     */
    data: DiscoverCategoryCreateManyInput | DiscoverCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscoverCategory createManyAndReturn
   */
  export type DiscoverCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many DiscoverCategories.
     */
    data: DiscoverCategoryCreateManyInput | DiscoverCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiscoverCategory update
   */
  export type DiscoverCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a DiscoverCategory.
     */
    data: XOR<DiscoverCategoryUpdateInput, DiscoverCategoryUncheckedUpdateInput>
    /**
     * Choose, which DiscoverCategory to update.
     */
    where: DiscoverCategoryWhereUniqueInput
  }

  /**
   * DiscoverCategory updateMany
   */
  export type DiscoverCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiscoverCategories.
     */
    data: XOR<DiscoverCategoryUpdateManyMutationInput, DiscoverCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DiscoverCategories to update
     */
    where?: DiscoverCategoryWhereInput
    /**
     * Limit how many DiscoverCategories to update.
     */
    limit?: number
  }

  /**
   * DiscoverCategory updateManyAndReturn
   */
  export type DiscoverCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * The data used to update DiscoverCategories.
     */
    data: XOR<DiscoverCategoryUpdateManyMutationInput, DiscoverCategoryUncheckedUpdateManyInput>
    /**
     * Filter which DiscoverCategories to update
     */
    where?: DiscoverCategoryWhereInput
    /**
     * Limit how many DiscoverCategories to update.
     */
    limit?: number
  }

  /**
   * DiscoverCategory upsert
   */
  export type DiscoverCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the DiscoverCategory to update in case it exists.
     */
    where: DiscoverCategoryWhereUniqueInput
    /**
     * In case the DiscoverCategory found by the `where` argument doesn't exist, create a new DiscoverCategory with this data.
     */
    create: XOR<DiscoverCategoryCreateInput, DiscoverCategoryUncheckedCreateInput>
    /**
     * In case the DiscoverCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscoverCategoryUpdateInput, DiscoverCategoryUncheckedUpdateInput>
  }

  /**
   * DiscoverCategory delete
   */
  export type DiscoverCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
    /**
     * Filter which DiscoverCategory to delete.
     */
    where: DiscoverCategoryWhereUniqueInput
  }

  /**
   * DiscoverCategory deleteMany
   */
  export type DiscoverCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiscoverCategories to delete
     */
    where?: DiscoverCategoryWhereInput
    /**
     * Limit how many DiscoverCategories to delete.
     */
    limit?: number
  }

  /**
   * DiscoverCategory without action
   */
  export type DiscoverCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscoverCategory
     */
    select?: DiscoverCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiscoverCategory
     */
    omit?: DiscoverCategoryOmit<ExtArgs> | null
  }


  /**
   * Model Hint
   */

  export type AggregateHint = {
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  export type HintAvgAggregateOutputType = {
    id: number | null
    triviaId: number | null
  }

  export type HintSumAggregateOutputType = {
    id: number | null
    triviaId: number | null
  }

  export type HintMinAggregateOutputType = {
    id: number | null
    triviaId: number | null
    type: $Enums.HintType | null
    content: string | null
    title: string | null
    createdAt: Date | null
  }

  export type HintMaxAggregateOutputType = {
    id: number | null
    triviaId: number | null
    type: $Enums.HintType | null
    content: string | null
    title: string | null
    createdAt: Date | null
  }

  export type HintCountAggregateOutputType = {
    id: number
    triviaId: number
    type: number
    content: number
    title: number
    createdAt: number
    _all: number
  }


  export type HintAvgAggregateInputType = {
    id?: true
    triviaId?: true
  }

  export type HintSumAggregateInputType = {
    id?: true
    triviaId?: true
  }

  export type HintMinAggregateInputType = {
    id?: true
    triviaId?: true
    type?: true
    content?: true
    title?: true
    createdAt?: true
  }

  export type HintMaxAggregateInputType = {
    id?: true
    triviaId?: true
    type?: true
    content?: true
    title?: true
    createdAt?: true
  }

  export type HintCountAggregateInputType = {
    id?: true
    triviaId?: true
    type?: true
    content?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type HintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hint to aggregate.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hints
    **/
    _count?: true | HintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HintMaxAggregateInputType
  }

  export type GetHintAggregateType<T extends HintAggregateArgs> = {
        [P in keyof T & keyof AggregateHint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHint[P]>
      : GetScalarType<T[P], AggregateHint[P]>
  }




  export type HintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HintWhereInput
    orderBy?: HintOrderByWithAggregationInput | HintOrderByWithAggregationInput[]
    by: HintScalarFieldEnum[] | HintScalarFieldEnum
    having?: HintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HintCountAggregateInputType | true
    _avg?: HintAvgAggregateInputType
    _sum?: HintSumAggregateInputType
    _min?: HintMinAggregateInputType
    _max?: HintMaxAggregateInputType
  }

  export type HintGroupByOutputType = {
    id: number
    triviaId: number
    type: $Enums.HintType
    content: string | null
    title: string | null
    createdAt: Date
    _count: HintCountAggregateOutputType | null
    _avg: HintAvgAggregateOutputType | null
    _sum: HintSumAggregateOutputType | null
    _min: HintMinAggregateOutputType | null
    _max: HintMaxAggregateOutputType | null
  }

  type GetHintGroupByPayload<T extends HintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HintGroupByOutputType[P]>
            : GetScalarType<T[P], HintGroupByOutputType[P]>
        }
      >
    >


  export type HintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triviaId?: boolean
    type?: boolean
    content?: boolean
    title?: boolean
    createdAt?: boolean
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>

  export type HintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triviaId?: boolean
    type?: boolean
    content?: boolean
    title?: boolean
    createdAt?: boolean
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>

  export type HintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    triviaId?: boolean
    type?: boolean
    content?: boolean
    title?: boolean
    createdAt?: boolean
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hint"]>

  export type HintSelectScalar = {
    id?: boolean
    triviaId?: boolean
    type?: boolean
    content?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type HintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "triviaId" | "type" | "content" | "title" | "createdAt", ExtArgs["result"]["hint"]>
  export type HintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }
  export type HintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }
  export type HintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trivia?: boolean | TriviaDefaultArgs<ExtArgs>
  }

  export type $HintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hint"
    objects: {
      trivia: Prisma.$TriviaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      triviaId: number
      type: $Enums.HintType
      content: string | null
      title: string | null
      createdAt: Date
    }, ExtArgs["result"]["hint"]>
    composites: {}
  }

  type HintGetPayload<S extends boolean | null | undefined | HintDefaultArgs> = $Result.GetResult<Prisma.$HintPayload, S>

  type HintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HintCountAggregateInputType | true
    }

  export interface HintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hint'], meta: { name: 'Hint' } }
    /**
     * Find zero or one Hint that matches the filter.
     * @param {HintFindUniqueArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HintFindUniqueArgs>(args: SelectSubset<T, HintFindUniqueArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HintFindUniqueOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HintFindUniqueOrThrowArgs>(args: SelectSubset<T, HintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HintFindFirstArgs>(args?: SelectSubset<T, HintFindFirstArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindFirstOrThrowArgs} args - Arguments to find a Hint
     * @example
     * // Get one Hint
     * const hint = await prisma.hint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HintFindFirstOrThrowArgs>(args?: SelectSubset<T, HintFindFirstOrThrowArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hints
     * const hints = await prisma.hint.findMany()
     * 
     * // Get first 10 Hints
     * const hints = await prisma.hint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hintWithIdOnly = await prisma.hint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HintFindManyArgs>(args?: SelectSubset<T, HintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hint.
     * @param {HintCreateArgs} args - Arguments to create a Hint.
     * @example
     * // Create one Hint
     * const Hint = await prisma.hint.create({
     *   data: {
     *     // ... data to create a Hint
     *   }
     * })
     * 
     */
    create<T extends HintCreateArgs>(args: SelectSubset<T, HintCreateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hints.
     * @param {HintCreateManyArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HintCreateManyArgs>(args?: SelectSubset<T, HintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hints and returns the data saved in the database.
     * @param {HintCreateManyAndReturnArgs} args - Arguments to create many Hints.
     * @example
     * // Create many Hints
     * const hint = await prisma.hint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hints and only return the `id`
     * const hintWithIdOnly = await prisma.hint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HintCreateManyAndReturnArgs>(args?: SelectSubset<T, HintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hint.
     * @param {HintDeleteArgs} args - Arguments to delete one Hint.
     * @example
     * // Delete one Hint
     * const Hint = await prisma.hint.delete({
     *   where: {
     *     // ... filter to delete one Hint
     *   }
     * })
     * 
     */
    delete<T extends HintDeleteArgs>(args: SelectSubset<T, HintDeleteArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hint.
     * @param {HintUpdateArgs} args - Arguments to update one Hint.
     * @example
     * // Update one Hint
     * const hint = await prisma.hint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HintUpdateArgs>(args: SelectSubset<T, HintUpdateArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hints.
     * @param {HintDeleteManyArgs} args - Arguments to filter Hints to delete.
     * @example
     * // Delete a few Hints
     * const { count } = await prisma.hint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HintDeleteManyArgs>(args?: SelectSubset<T, HintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HintUpdateManyArgs>(args: SelectSubset<T, HintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hints and returns the data updated in the database.
     * @param {HintUpdateManyAndReturnArgs} args - Arguments to update many Hints.
     * @example
     * // Update many Hints
     * const hint = await prisma.hint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hints and only return the `id`
     * const hintWithIdOnly = await prisma.hint.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends HintUpdateManyAndReturnArgs>(args: SelectSubset<T, HintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hint.
     * @param {HintUpsertArgs} args - Arguments to update or create a Hint.
     * @example
     * // Update or create a Hint
     * const hint = await prisma.hint.upsert({
     *   create: {
     *     // ... data to create a Hint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hint we want to update
     *   }
     * })
     */
    upsert<T extends HintUpsertArgs>(args: SelectSubset<T, HintUpsertArgs<ExtArgs>>): Prisma__HintClient<$Result.GetResult<Prisma.$HintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintCountArgs} args - Arguments to filter Hints to count.
     * @example
     * // Count the number of Hints
     * const count = await prisma.hint.count({
     *   where: {
     *     // ... the filter for the Hints we want to count
     *   }
     * })
    **/
    count<T extends HintCountArgs>(
      args?: Subset<T, HintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HintAggregateArgs>(args: Subset<T, HintAggregateArgs>): Prisma.PrismaPromise<GetHintAggregateType<T>>

    /**
     * Group by Hint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HintGroupByArgs} args - Group by arguments.
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
      T extends HintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HintGroupByArgs['orderBy'] }
        : { orderBy?: HintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hint model
   */
  readonly fields: HintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trivia<T extends TriviaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TriviaDefaultArgs<ExtArgs>>): Prisma__TriviaClient<$Result.GetResult<Prisma.$TriviaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Hint model
   */
  interface HintFieldRefs {
    readonly id: FieldRef<"Hint", 'Int'>
    readonly triviaId: FieldRef<"Hint", 'Int'>
    readonly type: FieldRef<"Hint", 'HintType'>
    readonly content: FieldRef<"Hint", 'String'>
    readonly title: FieldRef<"Hint", 'String'>
    readonly createdAt: FieldRef<"Hint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hint findUnique
   */
  export type HintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findUniqueOrThrow
   */
  export type HintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint findFirst
   */
  export type HintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findFirstOrThrow
   */
  export type HintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hint to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hints.
     */
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint findMany
   */
  export type HintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter, which Hints to fetch.
     */
    where?: HintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hints to fetch.
     */
    orderBy?: HintOrderByWithRelationInput | HintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hints.
     */
    cursor?: HintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hints.
     */
    skip?: number
    distinct?: HintScalarFieldEnum | HintScalarFieldEnum[]
  }

  /**
   * Hint create
   */
  export type HintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to create a Hint.
     */
    data: XOR<HintCreateInput, HintUncheckedCreateInput>
  }

  /**
   * Hint createMany
   */
  export type HintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hint createManyAndReturn
   */
  export type HintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * The data used to create many Hints.
     */
    data: HintCreateManyInput | HintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hint update
   */
  export type HintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The data needed to update a Hint.
     */
    data: XOR<HintUpdateInput, HintUncheckedUpdateInput>
    /**
     * Choose, which Hint to update.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint updateMany
   */
  export type HintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to update.
     */
    limit?: number
  }

  /**
   * Hint updateManyAndReturn
   */
  export type HintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * The data used to update Hints.
     */
    data: XOR<HintUpdateManyMutationInput, HintUncheckedUpdateManyInput>
    /**
     * Filter which Hints to update
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Hint upsert
   */
  export type HintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * The filter to search for the Hint to update in case it exists.
     */
    where: HintWhereUniqueInput
    /**
     * In case the Hint found by the `where` argument doesn't exist, create a new Hint with this data.
     */
    create: XOR<HintCreateInput, HintUncheckedCreateInput>
    /**
     * In case the Hint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HintUpdateInput, HintUncheckedUpdateInput>
  }

  /**
   * Hint delete
   */
  export type HintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
    /**
     * Filter which Hint to delete.
     */
    where: HintWhereUniqueInput
  }

  /**
   * Hint deleteMany
   */
  export type HintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hints to delete
     */
    where?: HintWhereInput
    /**
     * Limit how many Hints to delete.
     */
    limit?: number
  }

  /**
   * Hint without action
   */
  export type HintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hint
     */
    select?: HintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hint
     */
    omit?: HintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HintInclude<ExtArgs> | null
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


  export const AppUserScalarFieldEnum: {
    id: 'id',
    supabaseAuthId: 'supabaseAuthId',
    email: 'email',
    displayName: 'displayName',
    bio: 'bio',
    profilePicture: 'profilePicture',
    level: 'level',
    createdAt: 'createdAt'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    mediaTags: 'mediaTags',
    favourites: 'favourites',
    imageUrl: 'imageUrl',
    visibility: 'visibility',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const TriviaScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    title: 'title',
    incorrectStatement: 'incorrectStatement',
    highlightStart: 'highlightStart',
    highlightEnd: 'highlightEnd',
    correction: 'correction',
    tags: 'tags',
    comment: 'comment',
    visibility: 'visibility',
    likes: 'likes',
    dislikes: 'dislikes',
    correctCount: 'correctCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TriviaScalarFieldEnum = (typeof TriviaScalarFieldEnum)[keyof typeof TriviaScalarFieldEnum]


  export const PlaylistTriviaScalarFieldEnum: {
    playlistId: 'playlistId',
    triviaId: 'triviaId'
  };

  export type PlaylistTriviaScalarFieldEnum = (typeof PlaylistTriviaScalarFieldEnum)[keyof typeof PlaylistTriviaScalarFieldEnum]


  export const DiscoverCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type DiscoverCategoryScalarFieldEnum = (typeof DiscoverCategoryScalarFieldEnum)[keyof typeof DiscoverCategoryScalarFieldEnum]


  export const HintScalarFieldEnum: {
    id: 'id',
    triviaId: 'triviaId',
    type: 'type',
    content: 'content',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type HintScalarFieldEnum = (typeof HintScalarFieldEnum)[keyof typeof HintScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Visibility'
   */
  export type EnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility'>
    


  /**
   * Reference to a field of type 'Visibility[]'
   */
  export type ListEnumVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Visibility[]'>
    


  /**
   * Reference to a field of type 'HintType'
   */
  export type EnumHintTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HintType'>
    


  /**
   * Reference to a field of type 'HintType[]'
   */
  export type ListEnumHintTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HintType[]'>
    


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


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    id?: StringFilter<"AppUser"> | string
    supabaseAuthId?: StringFilter<"AppUser"> | string
    email?: StringFilter<"AppUser"> | string
    displayName?: StringFilter<"AppUser"> | string
    bio?: StringNullableFilter<"AppUser"> | string | null
    profilePicture?: StringNullableFilter<"AppUser"> | string | null
    level?: IntFilter<"AppUser"> | number
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    trivia?: TriviaListRelationFilter
    playlists?: PlaylistListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    trivia?: TriviaOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    supabaseAuthId?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    email?: StringFilter<"AppUser"> | string
    displayName?: StringFilter<"AppUser"> | string
    bio?: StringNullableFilter<"AppUser"> | string | null
    profilePicture?: StringNullableFilter<"AppUser"> | string | null
    level?: IntFilter<"AppUser"> | number
    createdAt?: DateTimeFilter<"AppUser"> | Date | string
    trivia?: TriviaListRelationFilter
    playlists?: PlaylistListRelationFilter
  }, "id" | "supabaseAuthId">

  export type AppUserOrderByWithAggregationInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    level?: SortOrder
    createdAt?: SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _avg?: AppUserAvgOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
    _sum?: AppUserSumOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppUser"> | string
    supabaseAuthId?: StringWithAggregatesFilter<"AppUser"> | string
    email?: StringWithAggregatesFilter<"AppUser"> | string
    displayName?: StringWithAggregatesFilter<"AppUser"> | string
    bio?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"AppUser"> | string | null
    level?: IntWithAggregatesFilter<"AppUser"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AppUser"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: IntFilter<"Playlist"> | number
    name?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    mediaTags?: EnumCategoryNullableListFilter<"Playlist">
    favourites?: IntFilter<"Playlist"> | number
    imageUrl?: StringNullableFilter<"Playlist"> | string | null
    visibility?: EnumVisibilityFilter<"Playlist"> | $Enums.Visibility
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    userId?: StringFilter<"Playlist"> | string
    trivia?: PlaylistTriviaListRelationFilter
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaTags?: SortOrder
    favourites?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    trivia?: PlaylistTriviaOrderByRelationAggregateInput
    user?: AppUserOrderByWithRelationInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    mediaTags?: EnumCategoryNullableListFilter<"Playlist">
    favourites?: IntFilter<"Playlist"> | number
    imageUrl?: StringNullableFilter<"Playlist"> | string | null
    visibility?: EnumVisibilityFilter<"Playlist"> | $Enums.Visibility
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    userId?: StringFilter<"Playlist"> | string
    trivia?: PlaylistTriviaListRelationFilter
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaTags?: SortOrder
    favourites?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Playlist"> | number
    name?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringWithAggregatesFilter<"Playlist"> | string
    mediaTags?: EnumCategoryNullableListFilter<"Playlist">
    favourites?: IntWithAggregatesFilter<"Playlist"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
    visibility?: EnumVisibilityWithAggregatesFilter<"Playlist"> | $Enums.Visibility
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    userId?: StringWithAggregatesFilter<"Playlist"> | string
  }

  export type TriviaWhereInput = {
    AND?: TriviaWhereInput | TriviaWhereInput[]
    OR?: TriviaWhereInput[]
    NOT?: TriviaWhereInput | TriviaWhereInput[]
    id?: IntFilter<"Trivia"> | number
    userId?: StringFilter<"Trivia"> | string
    category?: EnumCategoryFilter<"Trivia"> | $Enums.Category
    title?: StringFilter<"Trivia"> | string
    incorrectStatement?: StringFilter<"Trivia"> | string
    highlightStart?: IntFilter<"Trivia"> | number
    highlightEnd?: IntFilter<"Trivia"> | number
    correction?: StringFilter<"Trivia"> | string
    tags?: StringNullableListFilter<"Trivia">
    comment?: StringNullableFilter<"Trivia"> | string | null
    visibility?: EnumVisibilityFilter<"Trivia"> | $Enums.Visibility
    likes?: IntFilter<"Trivia"> | number
    dislikes?: IntFilter<"Trivia"> | number
    correctCount?: IntFilter<"Trivia"> | number
    createdAt?: DateTimeFilter<"Trivia"> | Date | string
    updatedAt?: DateTimeFilter<"Trivia"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
    hint?: XOR<HintNullableScalarRelationFilter, HintWhereInput> | null
    PlaylistTrivia?: PlaylistTriviaListRelationFilter
  }

  export type TriviaOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    incorrectStatement?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    correction?: SortOrder
    tags?: SortOrder
    comment?: SortOrderInput | SortOrder
    visibility?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: AppUserOrderByWithRelationInput
    hint?: HintOrderByWithRelationInput
    PlaylistTrivia?: PlaylistTriviaOrderByRelationAggregateInput
  }

  export type TriviaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TriviaWhereInput | TriviaWhereInput[]
    OR?: TriviaWhereInput[]
    NOT?: TriviaWhereInput | TriviaWhereInput[]
    userId?: StringFilter<"Trivia"> | string
    category?: EnumCategoryFilter<"Trivia"> | $Enums.Category
    title?: StringFilter<"Trivia"> | string
    incorrectStatement?: StringFilter<"Trivia"> | string
    highlightStart?: IntFilter<"Trivia"> | number
    highlightEnd?: IntFilter<"Trivia"> | number
    correction?: StringFilter<"Trivia"> | string
    tags?: StringNullableListFilter<"Trivia">
    comment?: StringNullableFilter<"Trivia"> | string | null
    visibility?: EnumVisibilityFilter<"Trivia"> | $Enums.Visibility
    likes?: IntFilter<"Trivia"> | number
    dislikes?: IntFilter<"Trivia"> | number
    correctCount?: IntFilter<"Trivia"> | number
    createdAt?: DateTimeFilter<"Trivia"> | Date | string
    updatedAt?: DateTimeFilter<"Trivia"> | Date | string
    user?: XOR<AppUserScalarRelationFilter, AppUserWhereInput>
    hint?: XOR<HintNullableScalarRelationFilter, HintWhereInput> | null
    PlaylistTrivia?: PlaylistTriviaListRelationFilter
  }, "id">

  export type TriviaOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    incorrectStatement?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    correction?: SortOrder
    tags?: SortOrder
    comment?: SortOrderInput | SortOrder
    visibility?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TriviaCountOrderByAggregateInput
    _avg?: TriviaAvgOrderByAggregateInput
    _max?: TriviaMaxOrderByAggregateInput
    _min?: TriviaMinOrderByAggregateInput
    _sum?: TriviaSumOrderByAggregateInput
  }

  export type TriviaScalarWhereWithAggregatesInput = {
    AND?: TriviaScalarWhereWithAggregatesInput | TriviaScalarWhereWithAggregatesInput[]
    OR?: TriviaScalarWhereWithAggregatesInput[]
    NOT?: TriviaScalarWhereWithAggregatesInput | TriviaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trivia"> | number
    userId?: StringWithAggregatesFilter<"Trivia"> | string
    category?: EnumCategoryWithAggregatesFilter<"Trivia"> | $Enums.Category
    title?: StringWithAggregatesFilter<"Trivia"> | string
    incorrectStatement?: StringWithAggregatesFilter<"Trivia"> | string
    highlightStart?: IntWithAggregatesFilter<"Trivia"> | number
    highlightEnd?: IntWithAggregatesFilter<"Trivia"> | number
    correction?: StringWithAggregatesFilter<"Trivia"> | string
    tags?: StringNullableListFilter<"Trivia">
    comment?: StringNullableWithAggregatesFilter<"Trivia"> | string | null
    visibility?: EnumVisibilityWithAggregatesFilter<"Trivia"> | $Enums.Visibility
    likes?: IntWithAggregatesFilter<"Trivia"> | number
    dislikes?: IntWithAggregatesFilter<"Trivia"> | number
    correctCount?: IntWithAggregatesFilter<"Trivia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Trivia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trivia"> | Date | string
  }

  export type PlaylistTriviaWhereInput = {
    AND?: PlaylistTriviaWhereInput | PlaylistTriviaWhereInput[]
    OR?: PlaylistTriviaWhereInput[]
    NOT?: PlaylistTriviaWhereInput | PlaylistTriviaWhereInput[]
    playlistId?: IntFilter<"PlaylistTrivia"> | number
    triviaId?: IntFilter<"PlaylistTrivia"> | number
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    trivia?: XOR<TriviaScalarRelationFilter, TriviaWhereInput>
  }

  export type PlaylistTriviaOrderByWithRelationInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    trivia?: TriviaOrderByWithRelationInput
  }

  export type PlaylistTriviaWhereUniqueInput = Prisma.AtLeast<{
    playlistId_triviaId?: PlaylistTriviaPlaylistIdTriviaIdCompoundUniqueInput
    AND?: PlaylistTriviaWhereInput | PlaylistTriviaWhereInput[]
    OR?: PlaylistTriviaWhereInput[]
    NOT?: PlaylistTriviaWhereInput | PlaylistTriviaWhereInput[]
    playlistId?: IntFilter<"PlaylistTrivia"> | number
    triviaId?: IntFilter<"PlaylistTrivia"> | number
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    trivia?: XOR<TriviaScalarRelationFilter, TriviaWhereInput>
  }, "playlistId_triviaId">

  export type PlaylistTriviaOrderByWithAggregationInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
    _count?: PlaylistTriviaCountOrderByAggregateInput
    _avg?: PlaylistTriviaAvgOrderByAggregateInput
    _max?: PlaylistTriviaMaxOrderByAggregateInput
    _min?: PlaylistTriviaMinOrderByAggregateInput
    _sum?: PlaylistTriviaSumOrderByAggregateInput
  }

  export type PlaylistTriviaScalarWhereWithAggregatesInput = {
    AND?: PlaylistTriviaScalarWhereWithAggregatesInput | PlaylistTriviaScalarWhereWithAggregatesInput[]
    OR?: PlaylistTriviaScalarWhereWithAggregatesInput[]
    NOT?: PlaylistTriviaScalarWhereWithAggregatesInput | PlaylistTriviaScalarWhereWithAggregatesInput[]
    playlistId?: IntWithAggregatesFilter<"PlaylistTrivia"> | number
    triviaId?: IntWithAggregatesFilter<"PlaylistTrivia"> | number
  }

  export type DiscoverCategoryWhereInput = {
    AND?: DiscoverCategoryWhereInput | DiscoverCategoryWhereInput[]
    OR?: DiscoverCategoryWhereInput[]
    NOT?: DiscoverCategoryWhereInput | DiscoverCategoryWhereInput[]
    id?: IntFilter<"DiscoverCategory"> | number
    name?: StringFilter<"DiscoverCategory"> | string
    imageUrl?: StringNullableFilter<"DiscoverCategory"> | string | null
  }

  export type DiscoverCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
  }

  export type DiscoverCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DiscoverCategoryWhereInput | DiscoverCategoryWhereInput[]
    OR?: DiscoverCategoryWhereInput[]
    NOT?: DiscoverCategoryWhereInput | DiscoverCategoryWhereInput[]
    imageUrl?: StringNullableFilter<"DiscoverCategory"> | string | null
  }, "id" | "name">

  export type DiscoverCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: DiscoverCategoryCountOrderByAggregateInput
    _avg?: DiscoverCategoryAvgOrderByAggregateInput
    _max?: DiscoverCategoryMaxOrderByAggregateInput
    _min?: DiscoverCategoryMinOrderByAggregateInput
    _sum?: DiscoverCategorySumOrderByAggregateInput
  }

  export type DiscoverCategoryScalarWhereWithAggregatesInput = {
    AND?: DiscoverCategoryScalarWhereWithAggregatesInput | DiscoverCategoryScalarWhereWithAggregatesInput[]
    OR?: DiscoverCategoryScalarWhereWithAggregatesInput[]
    NOT?: DiscoverCategoryScalarWhereWithAggregatesInput | DiscoverCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DiscoverCategory"> | number
    name?: StringWithAggregatesFilter<"DiscoverCategory"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"DiscoverCategory"> | string | null
  }

  export type HintWhereInput = {
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    id?: IntFilter<"Hint"> | number
    triviaId?: IntFilter<"Hint"> | number
    type?: EnumHintTypeFilter<"Hint"> | $Enums.HintType
    content?: StringNullableFilter<"Hint"> | string | null
    title?: StringNullableFilter<"Hint"> | string | null
    createdAt?: DateTimeFilter<"Hint"> | Date | string
    trivia?: XOR<TriviaScalarRelationFilter, TriviaWhereInput>
  }

  export type HintOrderByWithRelationInput = {
    id?: SortOrder
    triviaId?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    trivia?: TriviaOrderByWithRelationInput
  }

  export type HintWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    triviaId?: number
    AND?: HintWhereInput | HintWhereInput[]
    OR?: HintWhereInput[]
    NOT?: HintWhereInput | HintWhereInput[]
    type?: EnumHintTypeFilter<"Hint"> | $Enums.HintType
    content?: StringNullableFilter<"Hint"> | string | null
    title?: StringNullableFilter<"Hint"> | string | null
    createdAt?: DateTimeFilter<"Hint"> | Date | string
    trivia?: XOR<TriviaScalarRelationFilter, TriviaWhereInput>
  }, "id" | "triviaId">

  export type HintOrderByWithAggregationInput = {
    id?: SortOrder
    triviaId?: SortOrder
    type?: SortOrder
    content?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HintCountOrderByAggregateInput
    _avg?: HintAvgOrderByAggregateInput
    _max?: HintMaxOrderByAggregateInput
    _min?: HintMinOrderByAggregateInput
    _sum?: HintSumOrderByAggregateInput
  }

  export type HintScalarWhereWithAggregatesInput = {
    AND?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    OR?: HintScalarWhereWithAggregatesInput[]
    NOT?: HintScalarWhereWithAggregatesInput | HintScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hint"> | number
    triviaId?: IntWithAggregatesFilter<"Hint"> | number
    type?: EnumHintTypeWithAggregatesFilter<"Hint"> | $Enums.HintType
    content?: StringNullableWithAggregatesFilter<"Hint"> | string | null
    title?: StringNullableWithAggregatesFilter<"Hint"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hint"> | Date | string
  }

  export type AppUserCreateInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
    trivia?: TriviaCreateNestedManyWithoutUserInput
    playlists?: PlaylistCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
    trivia?: TriviaUncheckedCreateNestedManyWithoutUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: TriviaUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: TriviaUncheckedUpdateManyWithoutUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppUserCreateManyInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
  }

  export type AppUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    trivia?: PlaylistTriviaCreateNestedManyWithoutPlaylistInput
    user: AppUserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    trivia?: PlaylistTriviaUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: PlaylistTriviaUpdateManyWithoutPlaylistNestedInput
    user?: AppUserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    trivia?: PlaylistTriviaUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: number
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlaylistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaCreateInput = {
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AppUserCreateNestedOneWithoutTriviaInput
    hint?: HintCreateNestedOneWithoutTriviaInput
    PlaylistTrivia?: PlaylistTriviaCreateNestedManyWithoutTriviaInput
  }

  export type TriviaUncheckedCreateInput = {
    id?: number
    userId: string
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hint?: HintUncheckedCreateNestedOneWithoutTriviaInput
    PlaylistTrivia?: PlaylistTriviaUncheckedCreateNestedManyWithoutTriviaInput
  }

  export type TriviaUpdateInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutTriviaNestedInput
    hint?: HintUpdateOneWithoutTriviaNestedInput
    PlaylistTrivia?: PlaylistTriviaUpdateManyWithoutTriviaNestedInput
  }

  export type TriviaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hint?: HintUncheckedUpdateOneWithoutTriviaNestedInput
    PlaylistTrivia?: PlaylistTriviaUncheckedUpdateManyWithoutTriviaNestedInput
  }

  export type TriviaCreateManyInput = {
    id?: number
    userId: string
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaUpdateManyMutationInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriviaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTriviaCreateInput = {
    playlist: PlaylistCreateNestedOneWithoutTriviaInput
    trivia: TriviaCreateNestedOneWithoutPlaylistTriviaInput
  }

  export type PlaylistTriviaUncheckedCreateInput = {
    playlistId: number
    triviaId: number
  }

  export type PlaylistTriviaUpdateInput = {
    playlist?: PlaylistUpdateOneRequiredWithoutTriviaNestedInput
    trivia?: TriviaUpdateOneRequiredWithoutPlaylistTriviaNestedInput
  }

  export type PlaylistTriviaUncheckedUpdateInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
    triviaId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTriviaCreateManyInput = {
    playlistId: number
    triviaId: number
  }

  export type PlaylistTriviaUpdateManyMutationInput = {

  }

  export type PlaylistTriviaUncheckedUpdateManyInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
    triviaId?: IntFieldUpdateOperationsInput | number
  }

  export type DiscoverCategoryCreateInput = {
    name: string
    imageUrl?: string | null
  }

  export type DiscoverCategoryUncheckedCreateInput = {
    id?: number
    name: string
    imageUrl?: string | null
  }

  export type DiscoverCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscoverCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscoverCategoryCreateManyInput = {
    id?: number
    name: string
    imageUrl?: string | null
  }

  export type DiscoverCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscoverCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HintCreateInput = {
    type: $Enums.HintType
    content?: string | null
    title?: string | null
    createdAt?: Date | string
    trivia: TriviaCreateNestedOneWithoutHintInput
  }

  export type HintUncheckedCreateInput = {
    id?: number
    triviaId: number
    type: $Enums.HintType
    content?: string | null
    title?: string | null
    createdAt?: Date | string
  }

  export type HintUpdateInput = {
    type?: EnumHintTypeFieldUpdateOperationsInput | $Enums.HintType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: TriviaUpdateOneRequiredWithoutHintNestedInput
  }

  export type HintUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    triviaId?: IntFieldUpdateOperationsInput | number
    type?: EnumHintTypeFieldUpdateOperationsInput | $Enums.HintType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HintCreateManyInput = {
    id?: number
    triviaId: number
    type: $Enums.HintType
    content?: string | null
    title?: string | null
    createdAt?: Date | string
  }

  export type HintUpdateManyMutationInput = {
    type?: EnumHintTypeFieldUpdateOperationsInput | $Enums.HintType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HintUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    triviaId?: IntFieldUpdateOperationsInput | number
    type?: EnumHintTypeFieldUpdateOperationsInput | $Enums.HintType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type TriviaListRelationFilter = {
    every?: TriviaWhereInput
    some?: TriviaWhereInput
    none?: TriviaWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TriviaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUserAvgOrderByAggregateInput = {
    level?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    id?: SortOrder
    supabaseAuthId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    profilePicture?: SortOrder
    level?: SortOrder
    createdAt?: SortOrder
  }

  export type AppUserSumOrderByAggregateInput = {
    level?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type EnumCategoryNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel> | null
    has?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type PlaylistTriviaListRelationFilter = {
    every?: PlaylistTriviaWhereInput
    some?: PlaylistTriviaWhereInput
    none?: PlaylistTriviaWhereInput
  }

  export type AppUserScalarRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type PlaylistTriviaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    mediaTags?: SortOrder
    favourites?: SortOrder
    imageUrl?: SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
    favourites?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    favourites?: SortOrder
    imageUrl?: SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    favourites?: SortOrder
    imageUrl?: SortOrder
    visibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
    favourites?: SortOrder
  }

  export type EnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type HintNullableScalarRelationFilter = {
    is?: HintWhereInput | null
    isNot?: HintWhereInput | null
  }

  export type TriviaCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    incorrectStatement?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    correction?: SortOrder
    tags?: SortOrder
    comment?: SortOrder
    visibility?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaAvgOrderByAggregateInput = {
    id?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
  }

  export type TriviaMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    incorrectStatement?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    correction?: SortOrder
    comment?: SortOrder
    visibility?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    incorrectStatement?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    correction?: SortOrder
    comment?: SortOrder
    visibility?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TriviaSumOrderByAggregateInput = {
    id?: SortOrder
    highlightStart?: SortOrder
    highlightEnd?: SortOrder
    likes?: SortOrder
    dislikes?: SortOrder
    correctCount?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type TriviaScalarRelationFilter = {
    is?: TriviaWhereInput
    isNot?: TriviaWhereInput
  }

  export type PlaylistTriviaPlaylistIdTriviaIdCompoundUniqueInput = {
    playlistId: number
    triviaId: number
  }

  export type PlaylistTriviaCountOrderByAggregateInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
  }

  export type PlaylistTriviaAvgOrderByAggregateInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
  }

  export type PlaylistTriviaMaxOrderByAggregateInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
  }

  export type PlaylistTriviaMinOrderByAggregateInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
  }

  export type PlaylistTriviaSumOrderByAggregateInput = {
    playlistId?: SortOrder
    triviaId?: SortOrder
  }

  export type DiscoverCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type DiscoverCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiscoverCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type DiscoverCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type DiscoverCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumHintTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HintType | EnumHintTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHintTypeFilter<$PrismaModel> | $Enums.HintType
  }

  export type HintCountOrderByAggregateInput = {
    id?: SortOrder
    triviaId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type HintAvgOrderByAggregateInput = {
    id?: SortOrder
    triviaId?: SortOrder
  }

  export type HintMaxOrderByAggregateInput = {
    id?: SortOrder
    triviaId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type HintMinOrderByAggregateInput = {
    id?: SortOrder
    triviaId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type HintSumOrderByAggregateInput = {
    id?: SortOrder
    triviaId?: SortOrder
  }

  export type EnumHintTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HintType | EnumHintTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHintTypeWithAggregatesFilter<$PrismaModel> | $Enums.HintType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHintTypeFilter<$PrismaModel>
    _max?: NestedEnumHintTypeFilter<$PrismaModel>
  }

  export type TriviaCreateNestedManyWithoutUserInput = {
    create?: XOR<TriviaCreateWithoutUserInput, TriviaUncheckedCreateWithoutUserInput> | TriviaCreateWithoutUserInput[] | TriviaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriviaCreateOrConnectWithoutUserInput | TriviaCreateOrConnectWithoutUserInput[]
    createMany?: TriviaCreateManyUserInputEnvelope
    connect?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type TriviaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TriviaCreateWithoutUserInput, TriviaUncheckedCreateWithoutUserInput> | TriviaCreateWithoutUserInput[] | TriviaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriviaCreateOrConnectWithoutUserInput | TriviaCreateOrConnectWithoutUserInput[]
    createMany?: TriviaCreateManyUserInputEnvelope
    connect?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TriviaUpdateManyWithoutUserNestedInput = {
    create?: XOR<TriviaCreateWithoutUserInput, TriviaUncheckedCreateWithoutUserInput> | TriviaCreateWithoutUserInput[] | TriviaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriviaCreateOrConnectWithoutUserInput | TriviaCreateOrConnectWithoutUserInput[]
    upsert?: TriviaUpsertWithWhereUniqueWithoutUserInput | TriviaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TriviaCreateManyUserInputEnvelope
    set?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    disconnect?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    delete?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    connect?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    update?: TriviaUpdateWithWhereUniqueWithoutUserInput | TriviaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TriviaUpdateManyWithWhereWithoutUserInput | TriviaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TriviaScalarWhereInput | TriviaScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type TriviaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TriviaCreateWithoutUserInput, TriviaUncheckedCreateWithoutUserInput> | TriviaCreateWithoutUserInput[] | TriviaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriviaCreateOrConnectWithoutUserInput | TriviaCreateOrConnectWithoutUserInput[]
    upsert?: TriviaUpsertWithWhereUniqueWithoutUserInput | TriviaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TriviaCreateManyUserInputEnvelope
    set?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    disconnect?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    delete?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    connect?: TriviaWhereUniqueInput | TriviaWhereUniqueInput[]
    update?: TriviaUpdateWithWhereUniqueWithoutUserInput | TriviaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TriviaUpdateManyWithWhereWithoutUserInput | TriviaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TriviaScalarWhereInput | TriviaScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlaylistCreatemediaTagsInput = {
    set: $Enums.Category[]
  }

  export type PlaylistTriviaCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistTriviaCreateWithoutPlaylistInput, PlaylistTriviaUncheckedCreateWithoutPlaylistInput> | PlaylistTriviaCreateWithoutPlaylistInput[] | PlaylistTriviaUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutPlaylistInput | PlaylistTriviaCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistTriviaCreateManyPlaylistInputEnvelope
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
  }

  export type AppUserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<AppUserCreateWithoutPlaylistsInput, AppUserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutPlaylistsInput
    connect?: AppUserWhereUniqueInput
  }

  export type PlaylistTriviaUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistTriviaCreateWithoutPlaylistInput, PlaylistTriviaUncheckedCreateWithoutPlaylistInput> | PlaylistTriviaCreateWithoutPlaylistInput[] | PlaylistTriviaUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutPlaylistInput | PlaylistTriviaCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistTriviaCreateManyPlaylistInputEnvelope
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
  }

  export type PlaylistUpdatemediaTagsInput = {
    set?: $Enums.Category[]
    push?: $Enums.Category | $Enums.Category[]
  }

  export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility
  }

  export type PlaylistTriviaUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistTriviaCreateWithoutPlaylistInput, PlaylistTriviaUncheckedCreateWithoutPlaylistInput> | PlaylistTriviaCreateWithoutPlaylistInput[] | PlaylistTriviaUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutPlaylistInput | PlaylistTriviaCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistTriviaUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistTriviaUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistTriviaCreateManyPlaylistInputEnvelope
    set?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    disconnect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    delete?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    update?: PlaylistTriviaUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistTriviaUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistTriviaUpdateManyWithWhereWithoutPlaylistInput | PlaylistTriviaUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistTriviaScalarWhereInput | PlaylistTriviaScalarWhereInput[]
  }

  export type AppUserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<AppUserCreateWithoutPlaylistsInput, AppUserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutPlaylistsInput
    upsert?: AppUserUpsertWithoutPlaylistsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutPlaylistsInput, AppUserUpdateWithoutPlaylistsInput>, AppUserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type PlaylistTriviaUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistTriviaCreateWithoutPlaylistInput, PlaylistTriviaUncheckedCreateWithoutPlaylistInput> | PlaylistTriviaCreateWithoutPlaylistInput[] | PlaylistTriviaUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutPlaylistInput | PlaylistTriviaCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistTriviaUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistTriviaUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistTriviaCreateManyPlaylistInputEnvelope
    set?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    disconnect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    delete?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    update?: PlaylistTriviaUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistTriviaUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistTriviaUpdateManyWithWhereWithoutPlaylistInput | PlaylistTriviaUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistTriviaScalarWhereInput | PlaylistTriviaScalarWhereInput[]
  }

  export type TriviaCreatetagsInput = {
    set: string[]
  }

  export type AppUserCreateNestedOneWithoutTriviaInput = {
    create?: XOR<AppUserCreateWithoutTriviaInput, AppUserUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutTriviaInput
    connect?: AppUserWhereUniqueInput
  }

  export type HintCreateNestedOneWithoutTriviaInput = {
    create?: XOR<HintCreateWithoutTriviaInput, HintUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: HintCreateOrConnectWithoutTriviaInput
    connect?: HintWhereUniqueInput
  }

  export type PlaylistTriviaCreateNestedManyWithoutTriviaInput = {
    create?: XOR<PlaylistTriviaCreateWithoutTriviaInput, PlaylistTriviaUncheckedCreateWithoutTriviaInput> | PlaylistTriviaCreateWithoutTriviaInput[] | PlaylistTriviaUncheckedCreateWithoutTriviaInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutTriviaInput | PlaylistTriviaCreateOrConnectWithoutTriviaInput[]
    createMany?: PlaylistTriviaCreateManyTriviaInputEnvelope
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
  }

  export type HintUncheckedCreateNestedOneWithoutTriviaInput = {
    create?: XOR<HintCreateWithoutTriviaInput, HintUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: HintCreateOrConnectWithoutTriviaInput
    connect?: HintWhereUniqueInput
  }

  export type PlaylistTriviaUncheckedCreateNestedManyWithoutTriviaInput = {
    create?: XOR<PlaylistTriviaCreateWithoutTriviaInput, PlaylistTriviaUncheckedCreateWithoutTriviaInput> | PlaylistTriviaCreateWithoutTriviaInput[] | PlaylistTriviaUncheckedCreateWithoutTriviaInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutTriviaInput | PlaylistTriviaCreateOrConnectWithoutTriviaInput[]
    createMany?: PlaylistTriviaCreateManyTriviaInputEnvelope
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type TriviaUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AppUserUpdateOneRequiredWithoutTriviaNestedInput = {
    create?: XOR<AppUserCreateWithoutTriviaInput, AppUserUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutTriviaInput
    upsert?: AppUserUpsertWithoutTriviaInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutTriviaInput, AppUserUpdateWithoutTriviaInput>, AppUserUncheckedUpdateWithoutTriviaInput>
  }

  export type HintUpdateOneWithoutTriviaNestedInput = {
    create?: XOR<HintCreateWithoutTriviaInput, HintUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: HintCreateOrConnectWithoutTriviaInput
    upsert?: HintUpsertWithoutTriviaInput
    disconnect?: HintWhereInput | boolean
    delete?: HintWhereInput | boolean
    connect?: HintWhereUniqueInput
    update?: XOR<XOR<HintUpdateToOneWithWhereWithoutTriviaInput, HintUpdateWithoutTriviaInput>, HintUncheckedUpdateWithoutTriviaInput>
  }

  export type PlaylistTriviaUpdateManyWithoutTriviaNestedInput = {
    create?: XOR<PlaylistTriviaCreateWithoutTriviaInput, PlaylistTriviaUncheckedCreateWithoutTriviaInput> | PlaylistTriviaCreateWithoutTriviaInput[] | PlaylistTriviaUncheckedCreateWithoutTriviaInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutTriviaInput | PlaylistTriviaCreateOrConnectWithoutTriviaInput[]
    upsert?: PlaylistTriviaUpsertWithWhereUniqueWithoutTriviaInput | PlaylistTriviaUpsertWithWhereUniqueWithoutTriviaInput[]
    createMany?: PlaylistTriviaCreateManyTriviaInputEnvelope
    set?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    disconnect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    delete?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    update?: PlaylistTriviaUpdateWithWhereUniqueWithoutTriviaInput | PlaylistTriviaUpdateWithWhereUniqueWithoutTriviaInput[]
    updateMany?: PlaylistTriviaUpdateManyWithWhereWithoutTriviaInput | PlaylistTriviaUpdateManyWithWhereWithoutTriviaInput[]
    deleteMany?: PlaylistTriviaScalarWhereInput | PlaylistTriviaScalarWhereInput[]
  }

  export type HintUncheckedUpdateOneWithoutTriviaNestedInput = {
    create?: XOR<HintCreateWithoutTriviaInput, HintUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: HintCreateOrConnectWithoutTriviaInput
    upsert?: HintUpsertWithoutTriviaInput
    disconnect?: HintWhereInput | boolean
    delete?: HintWhereInput | boolean
    connect?: HintWhereUniqueInput
    update?: XOR<XOR<HintUpdateToOneWithWhereWithoutTriviaInput, HintUpdateWithoutTriviaInput>, HintUncheckedUpdateWithoutTriviaInput>
  }

  export type PlaylistTriviaUncheckedUpdateManyWithoutTriviaNestedInput = {
    create?: XOR<PlaylistTriviaCreateWithoutTriviaInput, PlaylistTriviaUncheckedCreateWithoutTriviaInput> | PlaylistTriviaCreateWithoutTriviaInput[] | PlaylistTriviaUncheckedCreateWithoutTriviaInput[]
    connectOrCreate?: PlaylistTriviaCreateOrConnectWithoutTriviaInput | PlaylistTriviaCreateOrConnectWithoutTriviaInput[]
    upsert?: PlaylistTriviaUpsertWithWhereUniqueWithoutTriviaInput | PlaylistTriviaUpsertWithWhereUniqueWithoutTriviaInput[]
    createMany?: PlaylistTriviaCreateManyTriviaInputEnvelope
    set?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    disconnect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    delete?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    connect?: PlaylistTriviaWhereUniqueInput | PlaylistTriviaWhereUniqueInput[]
    update?: PlaylistTriviaUpdateWithWhereUniqueWithoutTriviaInput | PlaylistTriviaUpdateWithWhereUniqueWithoutTriviaInput[]
    updateMany?: PlaylistTriviaUpdateManyWithWhereWithoutTriviaInput | PlaylistTriviaUpdateManyWithWhereWithoutTriviaInput[]
    deleteMany?: PlaylistTriviaScalarWhereInput | PlaylistTriviaScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutTriviaInput = {
    create?: XOR<PlaylistCreateWithoutTriviaInput, PlaylistUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutTriviaInput
    connect?: PlaylistWhereUniqueInput
  }

  export type TriviaCreateNestedOneWithoutPlaylistTriviaInput = {
    create?: XOR<TriviaCreateWithoutPlaylistTriviaInput, TriviaUncheckedCreateWithoutPlaylistTriviaInput>
    connectOrCreate?: TriviaCreateOrConnectWithoutPlaylistTriviaInput
    connect?: TriviaWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutTriviaNestedInput = {
    create?: XOR<PlaylistCreateWithoutTriviaInput, PlaylistUncheckedCreateWithoutTriviaInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutTriviaInput
    upsert?: PlaylistUpsertWithoutTriviaInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutTriviaInput, PlaylistUpdateWithoutTriviaInput>, PlaylistUncheckedUpdateWithoutTriviaInput>
  }

  export type TriviaUpdateOneRequiredWithoutPlaylistTriviaNestedInput = {
    create?: XOR<TriviaCreateWithoutPlaylistTriviaInput, TriviaUncheckedCreateWithoutPlaylistTriviaInput>
    connectOrCreate?: TriviaCreateOrConnectWithoutPlaylistTriviaInput
    upsert?: TriviaUpsertWithoutPlaylistTriviaInput
    connect?: TriviaWhereUniqueInput
    update?: XOR<XOR<TriviaUpdateToOneWithWhereWithoutPlaylistTriviaInput, TriviaUpdateWithoutPlaylistTriviaInput>, TriviaUncheckedUpdateWithoutPlaylistTriviaInput>
  }

  export type TriviaCreateNestedOneWithoutHintInput = {
    create?: XOR<TriviaCreateWithoutHintInput, TriviaUncheckedCreateWithoutHintInput>
    connectOrCreate?: TriviaCreateOrConnectWithoutHintInput
    connect?: TriviaWhereUniqueInput
  }

  export type EnumHintTypeFieldUpdateOperationsInput = {
    set?: $Enums.HintType
  }

  export type TriviaUpdateOneRequiredWithoutHintNestedInput = {
    create?: XOR<TriviaCreateWithoutHintInput, TriviaUncheckedCreateWithoutHintInput>
    connectOrCreate?: TriviaCreateOrConnectWithoutHintInput
    upsert?: TriviaUpsertWithoutHintInput
    connect?: TriviaWhereUniqueInput
    update?: XOR<XOR<TriviaUpdateToOneWithWhereWithoutHintInput, TriviaUpdateWithoutHintInput>, TriviaUncheckedUpdateWithoutHintInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityFilter<$PrismaModel> | $Enums.Visibility
  }

  export type NestedEnumVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Visibility | EnumVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Visibility[] | ListEnumVisibilityFieldRefInput<$PrismaModel>
    not?: NestedEnumVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.Visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVisibilityFilter<$PrismaModel>
    _max?: NestedEnumVisibilityFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumHintTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HintType | EnumHintTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHintTypeFilter<$PrismaModel> | $Enums.HintType
  }

  export type NestedEnumHintTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HintType | EnumHintTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HintType[] | ListEnumHintTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHintTypeWithAggregatesFilter<$PrismaModel> | $Enums.HintType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHintTypeFilter<$PrismaModel>
    _max?: NestedEnumHintTypeFilter<$PrismaModel>
  }

  export type TriviaCreateWithoutUserInput = {
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hint?: HintCreateNestedOneWithoutTriviaInput
    PlaylistTrivia?: PlaylistTriviaCreateNestedManyWithoutTriviaInput
  }

  export type TriviaUncheckedCreateWithoutUserInput = {
    id?: number
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hint?: HintUncheckedCreateNestedOneWithoutTriviaInput
    PlaylistTrivia?: PlaylistTriviaUncheckedCreateNestedManyWithoutTriviaInput
  }

  export type TriviaCreateOrConnectWithoutUserInput = {
    where: TriviaWhereUniqueInput
    create: XOR<TriviaCreateWithoutUserInput, TriviaUncheckedCreateWithoutUserInput>
  }

  export type TriviaCreateManyUserInputEnvelope = {
    data: TriviaCreateManyUserInput | TriviaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutUserInput = {
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    trivia?: PlaylistTriviaCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    trivia?: PlaylistTriviaUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TriviaUpsertWithWhereUniqueWithoutUserInput = {
    where: TriviaWhereUniqueInput
    update: XOR<TriviaUpdateWithoutUserInput, TriviaUncheckedUpdateWithoutUserInput>
    create: XOR<TriviaCreateWithoutUserInput, TriviaUncheckedCreateWithoutUserInput>
  }

  export type TriviaUpdateWithWhereUniqueWithoutUserInput = {
    where: TriviaWhereUniqueInput
    data: XOR<TriviaUpdateWithoutUserInput, TriviaUncheckedUpdateWithoutUserInput>
  }

  export type TriviaUpdateManyWithWhereWithoutUserInput = {
    where: TriviaScalarWhereInput
    data: XOR<TriviaUpdateManyMutationInput, TriviaUncheckedUpdateManyWithoutUserInput>
  }

  export type TriviaScalarWhereInput = {
    AND?: TriviaScalarWhereInput | TriviaScalarWhereInput[]
    OR?: TriviaScalarWhereInput[]
    NOT?: TriviaScalarWhereInput | TriviaScalarWhereInput[]
    id?: IntFilter<"Trivia"> | number
    userId?: StringFilter<"Trivia"> | string
    category?: EnumCategoryFilter<"Trivia"> | $Enums.Category
    title?: StringFilter<"Trivia"> | string
    incorrectStatement?: StringFilter<"Trivia"> | string
    highlightStart?: IntFilter<"Trivia"> | number
    highlightEnd?: IntFilter<"Trivia"> | number
    correction?: StringFilter<"Trivia"> | string
    tags?: StringNullableListFilter<"Trivia">
    comment?: StringNullableFilter<"Trivia"> | string | null
    visibility?: EnumVisibilityFilter<"Trivia"> | $Enums.Visibility
    likes?: IntFilter<"Trivia"> | number
    dislikes?: IntFilter<"Trivia"> | number
    correctCount?: IntFilter<"Trivia"> | number
    createdAt?: DateTimeFilter<"Trivia"> | Date | string
    updatedAt?: DateTimeFilter<"Trivia"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: IntFilter<"Playlist"> | number
    name?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    mediaTags?: EnumCategoryNullableListFilter<"Playlist">
    favourites?: IntFilter<"Playlist"> | number
    imageUrl?: StringNullableFilter<"Playlist"> | string | null
    visibility?: EnumVisibilityFilter<"Playlist"> | $Enums.Visibility
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    userId?: StringFilter<"Playlist"> | string
  }

  export type PlaylistTriviaCreateWithoutPlaylistInput = {
    trivia: TriviaCreateNestedOneWithoutPlaylistTriviaInput
  }

  export type PlaylistTriviaUncheckedCreateWithoutPlaylistInput = {
    triviaId: number
  }

  export type PlaylistTriviaCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistTriviaWhereUniqueInput
    create: XOR<PlaylistTriviaCreateWithoutPlaylistInput, PlaylistTriviaUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistTriviaCreateManyPlaylistInputEnvelope = {
    data: PlaylistTriviaCreateManyPlaylistInput | PlaylistTriviaCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type AppUserCreateWithoutPlaylistsInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
    trivia?: TriviaCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
    trivia?: TriviaUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutPlaylistsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutPlaylistsInput, AppUserUncheckedCreateWithoutPlaylistsInput>
  }

  export type PlaylistTriviaUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistTriviaWhereUniqueInput
    update: XOR<PlaylistTriviaUpdateWithoutPlaylistInput, PlaylistTriviaUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistTriviaCreateWithoutPlaylistInput, PlaylistTriviaUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistTriviaUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistTriviaWhereUniqueInput
    data: XOR<PlaylistTriviaUpdateWithoutPlaylistInput, PlaylistTriviaUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistTriviaUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistTriviaScalarWhereInput
    data: XOR<PlaylistTriviaUpdateManyMutationInput, PlaylistTriviaUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistTriviaScalarWhereInput = {
    AND?: PlaylistTriviaScalarWhereInput | PlaylistTriviaScalarWhereInput[]
    OR?: PlaylistTriviaScalarWhereInput[]
    NOT?: PlaylistTriviaScalarWhereInput | PlaylistTriviaScalarWhereInput[]
    playlistId?: IntFilter<"PlaylistTrivia"> | number
    triviaId?: IntFilter<"PlaylistTrivia"> | number
  }

  export type AppUserUpsertWithoutPlaylistsInput = {
    update: XOR<AppUserUpdateWithoutPlaylistsInput, AppUserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<AppUserCreateWithoutPlaylistsInput, AppUserUncheckedCreateWithoutPlaylistsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutPlaylistsInput, AppUserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type AppUserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: TriviaUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: TriviaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AppUserCreateWithoutTriviaInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutUserInput
  }

  export type AppUserUncheckedCreateWithoutTriviaInput = {
    id?: string
    supabaseAuthId: string
    email?: string
    displayName: string
    bio?: string | null
    profilePicture?: string | null
    level?: number
    createdAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type AppUserCreateOrConnectWithoutTriviaInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutTriviaInput, AppUserUncheckedCreateWithoutTriviaInput>
  }

  export type HintCreateWithoutTriviaInput = {
    type: $Enums.HintType
    content?: string | null
    title?: string | null
    createdAt?: Date | string
  }

  export type HintUncheckedCreateWithoutTriviaInput = {
    id?: number
    type: $Enums.HintType
    content?: string | null
    title?: string | null
    createdAt?: Date | string
  }

  export type HintCreateOrConnectWithoutTriviaInput = {
    where: HintWhereUniqueInput
    create: XOR<HintCreateWithoutTriviaInput, HintUncheckedCreateWithoutTriviaInput>
  }

  export type PlaylistTriviaCreateWithoutTriviaInput = {
    playlist: PlaylistCreateNestedOneWithoutTriviaInput
  }

  export type PlaylistTriviaUncheckedCreateWithoutTriviaInput = {
    playlistId: number
  }

  export type PlaylistTriviaCreateOrConnectWithoutTriviaInput = {
    where: PlaylistTriviaWhereUniqueInput
    create: XOR<PlaylistTriviaCreateWithoutTriviaInput, PlaylistTriviaUncheckedCreateWithoutTriviaInput>
  }

  export type PlaylistTriviaCreateManyTriviaInputEnvelope = {
    data: PlaylistTriviaCreateManyTriviaInput | PlaylistTriviaCreateManyTriviaInput[]
    skipDuplicates?: boolean
  }

  export type AppUserUpsertWithoutTriviaInput = {
    update: XOR<AppUserUpdateWithoutTriviaInput, AppUserUncheckedUpdateWithoutTriviaInput>
    create: XOR<AppUserCreateWithoutTriviaInput, AppUserUncheckedCreateWithoutTriviaInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutTriviaInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutTriviaInput, AppUserUncheckedUpdateWithoutTriviaInput>
  }

  export type AppUserUpdateWithoutTriviaInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutTriviaInput = {
    id?: StringFieldUpdateOperationsInput | string
    supabaseAuthId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    level?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HintUpsertWithoutTriviaInput = {
    update: XOR<HintUpdateWithoutTriviaInput, HintUncheckedUpdateWithoutTriviaInput>
    create: XOR<HintCreateWithoutTriviaInput, HintUncheckedCreateWithoutTriviaInput>
    where?: HintWhereInput
  }

  export type HintUpdateToOneWithWhereWithoutTriviaInput = {
    where?: HintWhereInput
    data: XOR<HintUpdateWithoutTriviaInput, HintUncheckedUpdateWithoutTriviaInput>
  }

  export type HintUpdateWithoutTriviaInput = {
    type?: EnumHintTypeFieldUpdateOperationsInput | $Enums.HintType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HintUncheckedUpdateWithoutTriviaInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumHintTypeFieldUpdateOperationsInput | $Enums.HintType
    content?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTriviaUpsertWithWhereUniqueWithoutTriviaInput = {
    where: PlaylistTriviaWhereUniqueInput
    update: XOR<PlaylistTriviaUpdateWithoutTriviaInput, PlaylistTriviaUncheckedUpdateWithoutTriviaInput>
    create: XOR<PlaylistTriviaCreateWithoutTriviaInput, PlaylistTriviaUncheckedCreateWithoutTriviaInput>
  }

  export type PlaylistTriviaUpdateWithWhereUniqueWithoutTriviaInput = {
    where: PlaylistTriviaWhereUniqueInput
    data: XOR<PlaylistTriviaUpdateWithoutTriviaInput, PlaylistTriviaUncheckedUpdateWithoutTriviaInput>
  }

  export type PlaylistTriviaUpdateManyWithWhereWithoutTriviaInput = {
    where: PlaylistTriviaScalarWhereInput
    data: XOR<PlaylistTriviaUpdateManyMutationInput, PlaylistTriviaUncheckedUpdateManyWithoutTriviaInput>
  }

  export type PlaylistCreateWithoutTriviaInput = {
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AppUserCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutTriviaInput = {
    id?: number
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type PlaylistCreateOrConnectWithoutTriviaInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutTriviaInput, PlaylistUncheckedCreateWithoutTriviaInput>
  }

  export type TriviaCreateWithoutPlaylistTriviaInput = {
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AppUserCreateNestedOneWithoutTriviaInput
    hint?: HintCreateNestedOneWithoutTriviaInput
  }

  export type TriviaUncheckedCreateWithoutPlaylistTriviaInput = {
    id?: number
    userId: string
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    hint?: HintUncheckedCreateNestedOneWithoutTriviaInput
  }

  export type TriviaCreateOrConnectWithoutPlaylistTriviaInput = {
    where: TriviaWhereUniqueInput
    create: XOR<TriviaCreateWithoutPlaylistTriviaInput, TriviaUncheckedCreateWithoutPlaylistTriviaInput>
  }

  export type PlaylistUpsertWithoutTriviaInput = {
    update: XOR<PlaylistUpdateWithoutTriviaInput, PlaylistUncheckedUpdateWithoutTriviaInput>
    create: XOR<PlaylistCreateWithoutTriviaInput, PlaylistUncheckedCreateWithoutTriviaInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutTriviaInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutTriviaInput, PlaylistUncheckedUpdateWithoutTriviaInput>
  }

  export type PlaylistUpdateWithoutTriviaInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutTriviaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TriviaUpsertWithoutPlaylistTriviaInput = {
    update: XOR<TriviaUpdateWithoutPlaylistTriviaInput, TriviaUncheckedUpdateWithoutPlaylistTriviaInput>
    create: XOR<TriviaCreateWithoutPlaylistTriviaInput, TriviaUncheckedCreateWithoutPlaylistTriviaInput>
    where?: TriviaWhereInput
  }

  export type TriviaUpdateToOneWithWhereWithoutPlaylistTriviaInput = {
    where?: TriviaWhereInput
    data: XOR<TriviaUpdateWithoutPlaylistTriviaInput, TriviaUncheckedUpdateWithoutPlaylistTriviaInput>
  }

  export type TriviaUpdateWithoutPlaylistTriviaInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutTriviaNestedInput
    hint?: HintUpdateOneWithoutTriviaNestedInput
  }

  export type TriviaUncheckedUpdateWithoutPlaylistTriviaInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hint?: HintUncheckedUpdateOneWithoutTriviaNestedInput
  }

  export type TriviaCreateWithoutHintInput = {
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AppUserCreateNestedOneWithoutTriviaInput
    PlaylistTrivia?: PlaylistTriviaCreateNestedManyWithoutTriviaInput
  }

  export type TriviaUncheckedCreateWithoutHintInput = {
    id?: number
    userId: string
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    PlaylistTrivia?: PlaylistTriviaUncheckedCreateNestedManyWithoutTriviaInput
  }

  export type TriviaCreateOrConnectWithoutHintInput = {
    where: TriviaWhereUniqueInput
    create: XOR<TriviaCreateWithoutHintInput, TriviaUncheckedCreateWithoutHintInput>
  }

  export type TriviaUpsertWithoutHintInput = {
    update: XOR<TriviaUpdateWithoutHintInput, TriviaUncheckedUpdateWithoutHintInput>
    create: XOR<TriviaCreateWithoutHintInput, TriviaUncheckedCreateWithoutHintInput>
    where?: TriviaWhereInput
  }

  export type TriviaUpdateToOneWithWhereWithoutHintInput = {
    where?: TriviaWhereInput
    data: XOR<TriviaUpdateWithoutHintInput, TriviaUncheckedUpdateWithoutHintInput>
  }

  export type TriviaUpdateWithoutHintInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AppUserUpdateOneRequiredWithoutTriviaNestedInput
    PlaylistTrivia?: PlaylistTriviaUpdateManyWithoutTriviaNestedInput
  }

  export type TriviaUncheckedUpdateWithoutHintInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PlaylistTrivia?: PlaylistTriviaUncheckedUpdateManyWithoutTriviaNestedInput
  }

  export type TriviaCreateManyUserInput = {
    id?: number
    category: $Enums.Category
    title: string
    incorrectStatement: string
    highlightStart: number
    highlightEnd: number
    correction: string
    tags?: TriviaCreatetagsInput | string[]
    comment?: string | null
    visibility?: $Enums.Visibility
    likes?: number
    dislikes?: number
    correctCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyUserInput = {
    id?: number
    name: string
    description: string
    mediaTags?: PlaylistCreatemediaTagsInput | $Enums.Category[]
    favourites?: number
    imageUrl?: string | null
    visibility?: $Enums.Visibility
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TriviaUpdateWithoutUserInput = {
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hint?: HintUpdateOneWithoutTriviaNestedInput
    PlaylistTrivia?: PlaylistTriviaUpdateManyWithoutTriviaNestedInput
  }

  export type TriviaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hint?: HintUncheckedUpdateOneWithoutTriviaNestedInput
    PlaylistTrivia?: PlaylistTriviaUncheckedUpdateManyWithoutTriviaNestedInput
  }

  export type TriviaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    title?: StringFieldUpdateOperationsInput | string
    incorrectStatement?: StringFieldUpdateOperationsInput | string
    highlightStart?: IntFieldUpdateOperationsInput | number
    highlightEnd?: IntFieldUpdateOperationsInput | number
    correction?: StringFieldUpdateOperationsInput | string
    tags?: TriviaUpdatetagsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    likes?: IntFieldUpdateOperationsInput | number
    dislikes?: IntFieldUpdateOperationsInput | number
    correctCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: PlaylistTriviaUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trivia?: PlaylistTriviaUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    mediaTags?: PlaylistUpdatemediaTagsInput | $Enums.Category[]
    favourites?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    visibility?: EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistTriviaCreateManyPlaylistInput = {
    triviaId: number
  }

  export type PlaylistTriviaUpdateWithoutPlaylistInput = {
    trivia?: TriviaUpdateOneRequiredWithoutPlaylistTriviaNestedInput
  }

  export type PlaylistTriviaUncheckedUpdateWithoutPlaylistInput = {
    triviaId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTriviaUncheckedUpdateManyWithoutPlaylistInput = {
    triviaId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTriviaCreateManyTriviaInput = {
    playlistId: number
  }

  export type PlaylistTriviaUpdateWithoutTriviaInput = {
    playlist?: PlaylistUpdateOneRequiredWithoutTriviaNestedInput
  }

  export type PlaylistTriviaUncheckedUpdateWithoutTriviaInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistTriviaUncheckedUpdateManyWithoutTriviaInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
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