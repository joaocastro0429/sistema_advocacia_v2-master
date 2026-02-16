
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Process
 * 
 */
export type Process = $Result.DefaultSelection<Prisma.$ProcessPayload>
/**
 * Model Lawyer
 * 
 */
export type Lawyer = $Result.DefaultSelection<Prisma.$LawyerPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Petition
 * 
 */
export type Petition = $Result.DefaultSelection<Prisma.$PetitionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AppointmentStatus: {
  SCHEDULED: 'SCHEDULED',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const PetitionStatus: {
  DRAFT: 'DRAFT',
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type PetitionStatus = (typeof PetitionStatus)[keyof typeof PetitionStatus]


export const PetitionType: {
  INITIAL_PETITION: 'INITIAL_PETITION',
  PETITION: 'PETITION',
  RECOURSE: 'RECOURSE',
  EVIDENCE: 'EVIDENCE',
  OTHER: 'OTHER'
};

export type PetitionType = (typeof PetitionType)[keyof typeof PetitionType]

}

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type PetitionStatus = $Enums.PetitionStatus

export const PetitionStatus: typeof $Enums.PetitionStatus

export type PetitionType = $Enums.PetitionType

export const PetitionType: typeof $Enums.PetitionType

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
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.process`: Exposes CRUD operations for the **Process** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Processes
    * const processes = await prisma.process.findMany()
    * ```
    */
  get process(): Prisma.ProcessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lawyer`: Exposes CRUD operations for the **Lawyer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lawyers
    * const lawyers = await prisma.lawyer.findMany()
    * ```
    */
  get lawyer(): Prisma.LawyerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.petition`: Exposes CRUD operations for the **Petition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Petitions
    * const petitions = await prisma.petition.findMany()
    * ```
    */
  get petition(): Prisma.PetitionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Client: 'Client',
    Process: 'Process',
    Lawyer: 'Lawyer',
    Appointment: 'Appointment',
    Petition: 'Petition'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "process" | "lawyer" | "appointment" | "petition"
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
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Process: {
        payload: Prisma.$ProcessPayload<ExtArgs>
        fields: Prisma.ProcessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findFirst: {
            args: Prisma.ProcessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          findMany: {
            args: Prisma.ProcessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          create: {
            args: Prisma.ProcessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          createMany: {
            args: Prisma.ProcessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          delete: {
            args: Prisma.ProcessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          update: {
            args: Prisma.ProcessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          deleteMany: {
            args: Prisma.ProcessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>[]
          }
          upsert: {
            args: Prisma.ProcessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessPayload>
          }
          aggregate: {
            args: Prisma.ProcessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcess>
          }
          groupBy: {
            args: Prisma.ProcessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessCountAggregateOutputType> | number
          }
        }
      }
      Lawyer: {
        payload: Prisma.$LawyerPayload<ExtArgs>
        fields: Prisma.LawyerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LawyerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LawyerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findFirst: {
            args: Prisma.LawyerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LawyerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          findMany: {
            args: Prisma.LawyerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          create: {
            args: Prisma.LawyerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          createMany: {
            args: Prisma.LawyerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LawyerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          delete: {
            args: Prisma.LawyerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          update: {
            args: Prisma.LawyerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          deleteMany: {
            args: Prisma.LawyerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LawyerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LawyerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>[]
          }
          upsert: {
            args: Prisma.LawyerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LawyerPayload>
          }
          aggregate: {
            args: Prisma.LawyerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLawyer>
          }
          groupBy: {
            args: Prisma.LawyerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LawyerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LawyerCountArgs<ExtArgs>
            result: $Utils.Optional<LawyerCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Petition: {
        payload: Prisma.$PetitionPayload<ExtArgs>
        fields: Prisma.PetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          findFirst: {
            args: Prisma.PetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          findMany: {
            args: Prisma.PetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>[]
          }
          create: {
            args: Prisma.PetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          createMany: {
            args: Prisma.PetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>[]
          }
          delete: {
            args: Prisma.PetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          update: {
            args: Prisma.PetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          deleteMany: {
            args: Prisma.PetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>[]
          }
          upsert: {
            args: Prisma.PetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PetitionPayload>
          }
          aggregate: {
            args: Prisma.PetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePetition>
          }
          groupBy: {
            args: Prisma.PetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PetitionCountArgs<ExtArgs>
            result: $Utils.Optional<PetitionCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    process?: ProcessOmit
    lawyer?: LawyerOmit
    appointment?: AppointmentOmit
    petition?: PetitionOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    appointments: number
    processes: number
    petitions: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | ClientCountOutputTypeCountAppointmentsArgs
    processes?: boolean | ClientCountOutputTypeCountProcessesArgs
    petitions?: boolean | ClientCountOutputTypeCountPetitionsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetitionWhereInput
  }


  /**
   * Count Type ProcessCountOutputType
   */

  export type ProcessCountOutputType = {
    appointment: number
    petitions: number
  }

  export type ProcessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | ProcessCountOutputTypeCountAppointmentArgs
    petitions?: boolean | ProcessCountOutputTypeCountPetitionsArgs
  }

  // Custom InputTypes
  /**
   * ProcessCountOutputType without action
   */
  export type ProcessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessCountOutputType
     */
    select?: ProcessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessCountOutputType without action
   */
  export type ProcessCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * ProcessCountOutputType without action
   */
  export type ProcessCountOutputTypeCountPetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetitionWhereInput
  }


  /**
   * Count Type LawyerCountOutputType
   */

  export type LawyerCountOutputType = {
    processes: number
    appointment: number
    petitions: number
  }

  export type LawyerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | LawyerCountOutputTypeCountProcessesArgs
    appointment?: boolean | LawyerCountOutputTypeCountAppointmentArgs
    petitions?: boolean | LawyerCountOutputTypeCountPetitionsArgs
  }

  // Custom InputTypes
  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LawyerCountOutputType
     */
    select?: LawyerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountProcessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountAppointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * LawyerCountOutputType without action
   */
  export type LawyerCountOutputTypeCountPetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetitionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    active: boolean | null
    oab: string | null
    oab_uf: string | null
    cpf: string | null
    phone: string | null
    specialty: string | null
    office: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    active: boolean | null
    oab: string | null
    oab_uf: string | null
    cpf: string | null
    phone: string | null
    specialty: string | null
    office: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    active: number
    oab: number
    oab_uf: number
    cpf: number
    phone: number
    specialty: number
    office: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    oab?: true
    oab_uf?: true
    cpf?: true
    phone?: true
    specialty?: true
    office?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    oab?: true
    oab_uf?: true
    cpf?: true
    phone?: true
    specialty?: true
    office?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    active?: true
    oab?: true
    oab_uf?: true
    cpf?: true
    phone?: true
    specialty?: true
    office?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: string
    active: boolean
    oab: string | null
    oab_uf: string | null
    cpf: string | null
    phone: string | null
    specialty: string | null
    office: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    oab?: boolean
    oab_uf?: boolean
    cpf?: boolean
    phone?: boolean
    specialty?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    oab?: boolean
    oab_uf?: boolean
    cpf?: boolean
    phone?: boolean
    specialty?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    oab?: boolean
    oab_uf?: boolean
    cpf?: boolean
    phone?: boolean
    specialty?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    active?: boolean
    oab?: boolean
    oab_uf?: boolean
    cpf?: boolean
    phone?: boolean
    specialty?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "active" | "oab" | "oab_uf" | "cpf" | "phone" | "specialty" | "office" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: string
      active: boolean
      oab: string | null
      oab_uf: string | null
      cpf: string | null
      phone: string | null
      specialty: string | null
      office: string | null
      createdAt: Date
      updatedAt: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly oab: FieldRef<"User", 'String'>
    readonly oab_uf: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly specialty: FieldRef<"User", 'String'>
    readonly office: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    cpf: string | null
    cnpj: string | null
    cpf_cnpj: string | null
    address: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    notes: string | null
    dateOfBirth: Date | null
    maritalStatus: string | null
    profession: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    cpf: string | null
    cnpj: string | null
    cpf_cnpj: string | null
    address: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    notes: string | null
    dateOfBirth: Date | null
    maritalStatus: string | null
    profession: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    cpf: number
    cnpj: number
    cpf_cnpj: number
    address: number
    city: number
    state: number
    zip_code: number
    notes: number
    dateOfBirth: number
    maritalStatus: number
    profession: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    cnpj?: true
    cpf_cnpj?: true
    address?: true
    city?: true
    state?: true
    zip_code?: true
    notes?: true
    dateOfBirth?: true
    maritalStatus?: true
    profession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    cnpj?: true
    cpf_cnpj?: true
    address?: true
    city?: true
    state?: true
    zip_code?: true
    notes?: true
    dateOfBirth?: true
    maritalStatus?: true
    profession?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    cpf?: true
    cnpj?: true
    cpf_cnpj?: true
    address?: true
    city?: true
    state?: true
    zip_code?: true
    notes?: true
    dateOfBirth?: true
    maritalStatus?: true
    profession?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    cpf: string | null
    cnpj: string | null
    cpf_cnpj: string | null
    address: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    notes: string | null
    dateOfBirth: Date | null
    maritalStatus: string | null
    profession: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    cnpj?: boolean
    cpf_cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    notes?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointments?: boolean | Client$appointmentsArgs<ExtArgs>
    processes?: boolean | Client$processesArgs<ExtArgs>
    petitions?: boolean | Client$petitionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    cnpj?: boolean
    cpf_cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    notes?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    cnpj?: boolean
    cpf_cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    notes?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    cpf?: boolean
    cnpj?: boolean
    cpf_cnpj?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    notes?: boolean
    dateOfBirth?: boolean
    maritalStatus?: boolean
    profession?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "cpf" | "cnpj" | "cpf_cnpj" | "address" | "city" | "state" | "zip_code" | "notes" | "dateOfBirth" | "maritalStatus" | "profession" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointments?: boolean | Client$appointmentsArgs<ExtArgs>
    processes?: boolean | Client$processesArgs<ExtArgs>
    petitions?: boolean | Client$petitionsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      appointments: Prisma.$AppointmentPayload<ExtArgs>[]
      processes: Prisma.$ProcessPayload<ExtArgs>[]
      petitions: Prisma.$PetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      cpf: string | null
      cnpj: string | null
      cpf_cnpj: string | null
      address: string | null
      city: string | null
      state: string | null
      zip_code: string | null
      notes: string | null
      dateOfBirth: Date | null
      maritalStatus: string | null
      profession: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointments<T extends Client$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, Client$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processes<T extends Client$processesArgs<ExtArgs> = {}>(args?: Subset<T, Client$processesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petitions<T extends Client$petitionsArgs<ExtArgs> = {}>(args?: Subset<T, Client$petitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly cpf: FieldRef<"Client", 'String'>
    readonly cnpj: FieldRef<"Client", 'String'>
    readonly cpf_cnpj: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly state: FieldRef<"Client", 'String'>
    readonly zip_code: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly dateOfBirth: FieldRef<"Client", 'DateTime'>
    readonly maritalStatus: FieldRef<"Client", 'String'>
    readonly profession: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.appointments
   */
  export type Client$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Client.processes
   */
  export type Client$processesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    cursor?: ProcessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Client.petitions
   */
  export type Client$petitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    where?: PetitionWhereInput
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    cursor?: PetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Process
   */

  export type AggregateProcess = {
    _count: ProcessCountAggregateOutputType | null
    _avg: ProcessAvgAggregateOutputType | null
    _sum: ProcessSumAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  export type ProcessAvgAggregateOutputType = {
    caseValue: Decimal | null
  }

  export type ProcessSumAggregateOutputType = {
    caseValue: Decimal | null
  }

  export type ProcessMinAggregateOutputType = {
    id: string | null
    processNumber: string | null
    court: string | null
    type: string | null
    status: string | null
    lawyerId: string | null
    clientId: string | null
    hearingDate: Date | null
    caseValue: Decimal | null
    internalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessMaxAggregateOutputType = {
    id: string | null
    processNumber: string | null
    court: string | null
    type: string | null
    status: string | null
    lawyerId: string | null
    clientId: string | null
    hearingDate: Date | null
    caseValue: Decimal | null
    internalNotes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcessCountAggregateOutputType = {
    id: number
    processNumber: number
    court: number
    type: number
    status: number
    lawyerId: number
    clientId: number
    hearingDate: number
    caseValue: number
    internalNotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcessAvgAggregateInputType = {
    caseValue?: true
  }

  export type ProcessSumAggregateInputType = {
    caseValue?: true
  }

  export type ProcessMinAggregateInputType = {
    id?: true
    processNumber?: true
    court?: true
    type?: true
    status?: true
    lawyerId?: true
    clientId?: true
    hearingDate?: true
    caseValue?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessMaxAggregateInputType = {
    id?: true
    processNumber?: true
    court?: true
    type?: true
    status?: true
    lawyerId?: true
    clientId?: true
    hearingDate?: true
    caseValue?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcessCountAggregateInputType = {
    id?: true
    processNumber?: true
    court?: true
    type?: true
    status?: true
    lawyerId?: true
    clientId?: true
    hearingDate?: true
    caseValue?: true
    internalNotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Process to aggregate.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Processes
    **/
    _count?: true | ProcessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessMaxAggregateInputType
  }

  export type GetProcessAggregateType<T extends ProcessAggregateArgs> = {
        [P in keyof T & keyof AggregateProcess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcess[P]>
      : GetScalarType<T[P], AggregateProcess[P]>
  }




  export type ProcessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithAggregationInput | ProcessOrderByWithAggregationInput[]
    by: ProcessScalarFieldEnum[] | ProcessScalarFieldEnum
    having?: ProcessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessCountAggregateInputType | true
    _avg?: ProcessAvgAggregateInputType
    _sum?: ProcessSumAggregateInputType
    _min?: ProcessMinAggregateInputType
    _max?: ProcessMaxAggregateInputType
  }

  export type ProcessGroupByOutputType = {
    id: string
    processNumber: string
    court: string
    type: string
    status: string
    lawyerId: string | null
    clientId: string | null
    hearingDate: Date
    caseValue: Decimal
    internalNotes: string
    createdAt: Date
    updatedAt: Date
    _count: ProcessCountAggregateOutputType | null
    _avg: ProcessAvgAggregateOutputType | null
    _sum: ProcessSumAggregateOutputType | null
    _min: ProcessMinAggregateOutputType | null
    _max: ProcessMaxAggregateOutputType | null
  }

  type GetProcessGroupByPayload<T extends ProcessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessGroupByOutputType[P]>
        }
      >
    >


  export type ProcessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processNumber?: boolean
    court?: boolean
    type?: boolean
    status?: boolean
    lawyerId?: boolean
    clientId?: boolean
    hearingDate?: boolean
    caseValue?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawyer?: boolean | Process$lawyerArgs<ExtArgs>
    client?: boolean | Process$clientArgs<ExtArgs>
    appointment?: boolean | Process$appointmentArgs<ExtArgs>
    petitions?: boolean | Process$petitionsArgs<ExtArgs>
    _count?: boolean | ProcessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processNumber?: boolean
    court?: boolean
    type?: boolean
    status?: boolean
    lawyerId?: boolean
    clientId?: boolean
    hearingDate?: boolean
    caseValue?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawyer?: boolean | Process$lawyerArgs<ExtArgs>
    client?: boolean | Process$clientArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    processNumber?: boolean
    court?: boolean
    type?: boolean
    status?: boolean
    lawyerId?: boolean
    clientId?: boolean
    hearingDate?: boolean
    caseValue?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lawyer?: boolean | Process$lawyerArgs<ExtArgs>
    client?: boolean | Process$clientArgs<ExtArgs>
  }, ExtArgs["result"]["process"]>

  export type ProcessSelectScalar = {
    id?: boolean
    processNumber?: boolean
    court?: boolean
    type?: boolean
    status?: boolean
    lawyerId?: boolean
    clientId?: boolean
    hearingDate?: boolean
    caseValue?: boolean
    internalNotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "processNumber" | "court" | "type" | "status" | "lawyerId" | "clientId" | "hearingDate" | "caseValue" | "internalNotes" | "createdAt" | "updatedAt", ExtArgs["result"]["process"]>
  export type ProcessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | Process$lawyerArgs<ExtArgs>
    client?: boolean | Process$clientArgs<ExtArgs>
    appointment?: boolean | Process$appointmentArgs<ExtArgs>
    petitions?: boolean | Process$petitionsArgs<ExtArgs>
    _count?: boolean | ProcessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | Process$lawyerArgs<ExtArgs>
    client?: boolean | Process$clientArgs<ExtArgs>
  }
  export type ProcessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lawyer?: boolean | Process$lawyerArgs<ExtArgs>
    client?: boolean | Process$clientArgs<ExtArgs>
  }

  export type $ProcessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Process"
    objects: {
      lawyer: Prisma.$LawyerPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      petitions: Prisma.$PetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      processNumber: string
      court: string
      type: string
      status: string
      lawyerId: string | null
      clientId: string | null
      hearingDate: Date
      caseValue: Prisma.Decimal
      internalNotes: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["process"]>
    composites: {}
  }

  type ProcessGetPayload<S extends boolean | null | undefined | ProcessDefaultArgs> = $Result.GetResult<Prisma.$ProcessPayload, S>

  type ProcessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessCountAggregateInputType | true
    }

  export interface ProcessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Process'], meta: { name: 'Process' } }
    /**
     * Find zero or one Process that matches the filter.
     * @param {ProcessFindUniqueArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessFindUniqueArgs>(args: SelectSubset<T, ProcessFindUniqueArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Process that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessFindUniqueOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessFindFirstArgs>(args?: SelectSubset<T, ProcessFindFirstArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Process that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindFirstOrThrowArgs} args - Arguments to find a Process
     * @example
     * // Get one Process
     * const process = await prisma.process.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Processes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Processes
     * const processes = await prisma.process.findMany()
     * 
     * // Get first 10 Processes
     * const processes = await prisma.process.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processWithIdOnly = await prisma.process.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessFindManyArgs>(args?: SelectSubset<T, ProcessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Process.
     * @param {ProcessCreateArgs} args - Arguments to create a Process.
     * @example
     * // Create one Process
     * const Process = await prisma.process.create({
     *   data: {
     *     // ... data to create a Process
     *   }
     * })
     * 
     */
    create<T extends ProcessCreateArgs>(args: SelectSubset<T, ProcessCreateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Processes.
     * @param {ProcessCreateManyArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessCreateManyArgs>(args?: SelectSubset<T, ProcessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Processes and returns the data saved in the database.
     * @param {ProcessCreateManyAndReturnArgs} args - Arguments to create many Processes.
     * @example
     * // Create many Processes
     * const process = await prisma.process.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Processes and only return the `id`
     * const processWithIdOnly = await prisma.process.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Process.
     * @param {ProcessDeleteArgs} args - Arguments to delete one Process.
     * @example
     * // Delete one Process
     * const Process = await prisma.process.delete({
     *   where: {
     *     // ... filter to delete one Process
     *   }
     * })
     * 
     */
    delete<T extends ProcessDeleteArgs>(args: SelectSubset<T, ProcessDeleteArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Process.
     * @param {ProcessUpdateArgs} args - Arguments to update one Process.
     * @example
     * // Update one Process
     * const process = await prisma.process.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessUpdateArgs>(args: SelectSubset<T, ProcessUpdateArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Processes.
     * @param {ProcessDeleteManyArgs} args - Arguments to filter Processes to delete.
     * @example
     * // Delete a few Processes
     * const { count } = await prisma.process.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessDeleteManyArgs>(args?: SelectSubset<T, ProcessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessUpdateManyArgs>(args: SelectSubset<T, ProcessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Processes and returns the data updated in the database.
     * @param {ProcessUpdateManyAndReturnArgs} args - Arguments to update many Processes.
     * @example
     * // Update many Processes
     * const process = await prisma.process.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Processes and only return the `id`
     * const processWithIdOnly = await prisma.process.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Process.
     * @param {ProcessUpsertArgs} args - Arguments to update or create a Process.
     * @example
     * // Update or create a Process
     * const process = await prisma.process.upsert({
     *   create: {
     *     // ... data to create a Process
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Process we want to update
     *   }
     * })
     */
    upsert<T extends ProcessUpsertArgs>(args: SelectSubset<T, ProcessUpsertArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Processes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessCountArgs} args - Arguments to filter Processes to count.
     * @example
     * // Count the number of Processes
     * const count = await prisma.process.count({
     *   where: {
     *     // ... the filter for the Processes we want to count
     *   }
     * })
    **/
    count<T extends ProcessCountArgs>(
      args?: Subset<T, ProcessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessAggregateArgs>(args: Subset<T, ProcessAggregateArgs>): Prisma.PrismaPromise<GetProcessAggregateType<T>>

    /**
     * Group by Process.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessGroupByArgs} args - Group by arguments.
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
      T extends ProcessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessGroupByArgs['orderBy'] }
        : { orderBy?: ProcessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Process model
   */
  readonly fields: ProcessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Process.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lawyer<T extends Process$lawyerArgs<ExtArgs> = {}>(args?: Subset<T, Process$lawyerArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Process$clientArgs<ExtArgs> = {}>(args?: Subset<T, Process$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    appointment<T extends Process$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Process$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petitions<T extends Process$petitionsArgs<ExtArgs> = {}>(args?: Subset<T, Process$petitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Process model
   */
  interface ProcessFieldRefs {
    readonly id: FieldRef<"Process", 'String'>
    readonly processNumber: FieldRef<"Process", 'String'>
    readonly court: FieldRef<"Process", 'String'>
    readonly type: FieldRef<"Process", 'String'>
    readonly status: FieldRef<"Process", 'String'>
    readonly lawyerId: FieldRef<"Process", 'String'>
    readonly clientId: FieldRef<"Process", 'String'>
    readonly hearingDate: FieldRef<"Process", 'DateTime'>
    readonly caseValue: FieldRef<"Process", 'Decimal'>
    readonly internalNotes: FieldRef<"Process", 'String'>
    readonly createdAt: FieldRef<"Process", 'DateTime'>
    readonly updatedAt: FieldRef<"Process", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Process findUnique
   */
  export type ProcessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findUniqueOrThrow
   */
  export type ProcessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process findFirst
   */
  export type ProcessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findFirstOrThrow
   */
  export type ProcessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Process to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Processes.
     */
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process findMany
   */
  export type ProcessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter, which Processes to fetch.
     */
    where?: ProcessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Processes to fetch.
     */
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Processes.
     */
    cursor?: ProcessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Processes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Processes.
     */
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Process create
   */
  export type ProcessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to create a Process.
     */
    data: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
  }

  /**
   * Process createMany
   */
  export type ProcessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Process createManyAndReturn
   */
  export type ProcessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * The data used to create many Processes.
     */
    data: ProcessCreateManyInput | ProcessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Process update
   */
  export type ProcessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The data needed to update a Process.
     */
    data: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
    /**
     * Choose, which Process to update.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process updateMany
   */
  export type ProcessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
  }

  /**
   * Process updateManyAndReturn
   */
  export type ProcessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * The data used to update Processes.
     */
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyInput>
    /**
     * Filter which Processes to update
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Process upsert
   */
  export type ProcessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * The filter to search for the Process to update in case it exists.
     */
    where: ProcessWhereUniqueInput
    /**
     * In case the Process found by the `where` argument doesn't exist, create a new Process with this data.
     */
    create: XOR<ProcessCreateInput, ProcessUncheckedCreateInput>
    /**
     * In case the Process was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessUpdateInput, ProcessUncheckedUpdateInput>
  }

  /**
   * Process delete
   */
  export type ProcessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    /**
     * Filter which Process to delete.
     */
    where: ProcessWhereUniqueInput
  }

  /**
   * Process deleteMany
   */
  export type ProcessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Processes to delete
     */
    where?: ProcessWhereInput
    /**
     * Limit how many Processes to delete.
     */
    limit?: number
  }

  /**
   * Process.lawyer
   */
  export type Process$lawyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    where?: LawyerWhereInput
  }

  /**
   * Process.client
   */
  export type Process$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Process.appointment
   */
  export type Process$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Process.petitions
   */
  export type Process$petitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    where?: PetitionWhereInput
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    cursor?: PetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Process without action
   */
  export type ProcessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
  }


  /**
   * Model Lawyer
   */

  export type AggregateLawyer = {
    _count: LawyerCountAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  export type LawyerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    oabNumber: string | null
    specialty: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawyerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    oabNumber: string | null
    specialty: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LawyerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    oabNumber: number
    specialty: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LawyerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    oabNumber?: true
    specialty?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawyerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    oabNumber?: true
    specialty?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LawyerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    oabNumber?: true
    specialty?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LawyerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyer to aggregate.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lawyers
    **/
    _count?: true | LawyerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LawyerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LawyerMaxAggregateInputType
  }

  export type GetLawyerAggregateType<T extends LawyerAggregateArgs> = {
        [P in keyof T & keyof AggregateLawyer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLawyer[P]>
      : GetScalarType<T[P], AggregateLawyer[P]>
  }




  export type LawyerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LawyerWhereInput
    orderBy?: LawyerOrderByWithAggregationInput | LawyerOrderByWithAggregationInput[]
    by: LawyerScalarFieldEnum[] | LawyerScalarFieldEnum
    having?: LawyerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LawyerCountAggregateInputType | true
    _min?: LawyerMinAggregateInputType
    _max?: LawyerMaxAggregateInputType
  }

  export type LawyerGroupByOutputType = {
    id: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: LawyerCountAggregateOutputType | null
    _min: LawyerMinAggregateOutputType | null
    _max: LawyerMaxAggregateOutputType | null
  }

  type GetLawyerGroupByPayload<T extends LawyerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LawyerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LawyerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LawyerGroupByOutputType[P]>
            : GetScalarType<T[P], LawyerGroupByOutputType[P]>
        }
      >
    >


  export type LawyerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    oabNumber?: boolean
    specialty?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processes?: boolean | Lawyer$processesArgs<ExtArgs>
    appointment?: boolean | Lawyer$appointmentArgs<ExtArgs>
    petitions?: boolean | Lawyer$petitionsArgs<ExtArgs>
    _count?: boolean | LawyerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    oabNumber?: boolean
    specialty?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    oabNumber?: boolean
    specialty?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lawyer"]>

  export type LawyerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    oabNumber?: boolean
    specialty?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LawyerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "oabNumber" | "specialty" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["lawyer"]>
  export type LawyerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processes?: boolean | Lawyer$processesArgs<ExtArgs>
    appointment?: boolean | Lawyer$appointmentArgs<ExtArgs>
    petitions?: boolean | Lawyer$petitionsArgs<ExtArgs>
    _count?: boolean | LawyerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LawyerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LawyerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LawyerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lawyer"
    objects: {
      processes: Prisma.$ProcessPayload<ExtArgs>[]
      appointment: Prisma.$AppointmentPayload<ExtArgs>[]
      petitions: Prisma.$PetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      oabNumber: string
      specialty: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lawyer"]>
    composites: {}
  }

  type LawyerGetPayload<S extends boolean | null | undefined | LawyerDefaultArgs> = $Result.GetResult<Prisma.$LawyerPayload, S>

  type LawyerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LawyerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LawyerCountAggregateInputType | true
    }

  export interface LawyerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lawyer'], meta: { name: 'Lawyer' } }
    /**
     * Find zero or one Lawyer that matches the filter.
     * @param {LawyerFindUniqueArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LawyerFindUniqueArgs>(args: SelectSubset<T, LawyerFindUniqueArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lawyer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LawyerFindUniqueOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LawyerFindUniqueOrThrowArgs>(args: SelectSubset<T, LawyerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LawyerFindFirstArgs>(args?: SelectSubset<T, LawyerFindFirstArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lawyer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindFirstOrThrowArgs} args - Arguments to find a Lawyer
     * @example
     * // Get one Lawyer
     * const lawyer = await prisma.lawyer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LawyerFindFirstOrThrowArgs>(args?: SelectSubset<T, LawyerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lawyers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lawyers
     * const lawyers = await prisma.lawyer.findMany()
     * 
     * // Get first 10 Lawyers
     * const lawyers = await prisma.lawyer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LawyerFindManyArgs>(args?: SelectSubset<T, LawyerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lawyer.
     * @param {LawyerCreateArgs} args - Arguments to create a Lawyer.
     * @example
     * // Create one Lawyer
     * const Lawyer = await prisma.lawyer.create({
     *   data: {
     *     // ... data to create a Lawyer
     *   }
     * })
     * 
     */
    create<T extends LawyerCreateArgs>(args: SelectSubset<T, LawyerCreateArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lawyers.
     * @param {LawyerCreateManyArgs} args - Arguments to create many Lawyers.
     * @example
     * // Create many Lawyers
     * const lawyer = await prisma.lawyer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LawyerCreateManyArgs>(args?: SelectSubset<T, LawyerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lawyers and returns the data saved in the database.
     * @param {LawyerCreateManyAndReturnArgs} args - Arguments to create many Lawyers.
     * @example
     * // Create many Lawyers
     * const lawyer = await prisma.lawyer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lawyers and only return the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LawyerCreateManyAndReturnArgs>(args?: SelectSubset<T, LawyerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lawyer.
     * @param {LawyerDeleteArgs} args - Arguments to delete one Lawyer.
     * @example
     * // Delete one Lawyer
     * const Lawyer = await prisma.lawyer.delete({
     *   where: {
     *     // ... filter to delete one Lawyer
     *   }
     * })
     * 
     */
    delete<T extends LawyerDeleteArgs>(args: SelectSubset<T, LawyerDeleteArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lawyer.
     * @param {LawyerUpdateArgs} args - Arguments to update one Lawyer.
     * @example
     * // Update one Lawyer
     * const lawyer = await prisma.lawyer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LawyerUpdateArgs>(args: SelectSubset<T, LawyerUpdateArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lawyers.
     * @param {LawyerDeleteManyArgs} args - Arguments to filter Lawyers to delete.
     * @example
     * // Delete a few Lawyers
     * const { count } = await prisma.lawyer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LawyerDeleteManyArgs>(args?: SelectSubset<T, LawyerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lawyers
     * const lawyer = await prisma.lawyer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LawyerUpdateManyArgs>(args: SelectSubset<T, LawyerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lawyers and returns the data updated in the database.
     * @param {LawyerUpdateManyAndReturnArgs} args - Arguments to update many Lawyers.
     * @example
     * // Update many Lawyers
     * const lawyer = await prisma.lawyer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lawyers and only return the `id`
     * const lawyerWithIdOnly = await prisma.lawyer.updateManyAndReturn({
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
    updateManyAndReturn<T extends LawyerUpdateManyAndReturnArgs>(args: SelectSubset<T, LawyerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lawyer.
     * @param {LawyerUpsertArgs} args - Arguments to update or create a Lawyer.
     * @example
     * // Update or create a Lawyer
     * const lawyer = await prisma.lawyer.upsert({
     *   create: {
     *     // ... data to create a Lawyer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lawyer we want to update
     *   }
     * })
     */
    upsert<T extends LawyerUpsertArgs>(args: SelectSubset<T, LawyerUpsertArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lawyers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerCountArgs} args - Arguments to filter Lawyers to count.
     * @example
     * // Count the number of Lawyers
     * const count = await prisma.lawyer.count({
     *   where: {
     *     // ... the filter for the Lawyers we want to count
     *   }
     * })
    **/
    count<T extends LawyerCountArgs>(
      args?: Subset<T, LawyerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LawyerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LawyerAggregateArgs>(args: Subset<T, LawyerAggregateArgs>): Prisma.PrismaPromise<GetLawyerAggregateType<T>>

    /**
     * Group by Lawyer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LawyerGroupByArgs} args - Group by arguments.
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
      T extends LawyerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LawyerGroupByArgs['orderBy'] }
        : { orderBy?: LawyerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LawyerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLawyerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lawyer model
   */
  readonly fields: LawyerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lawyer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LawyerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processes<T extends Lawyer$processesArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$processesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointment<T extends Lawyer$appointmentArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$appointmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    petitions<T extends Lawyer$petitionsArgs<ExtArgs> = {}>(args?: Subset<T, Lawyer$petitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lawyer model
   */
  interface LawyerFieldRefs {
    readonly id: FieldRef<"Lawyer", 'String'>
    readonly name: FieldRef<"Lawyer", 'String'>
    readonly email: FieldRef<"Lawyer", 'String'>
    readonly oabNumber: FieldRef<"Lawyer", 'String'>
    readonly specialty: FieldRef<"Lawyer", 'String'>
    readonly phone: FieldRef<"Lawyer", 'String'>
    readonly createdAt: FieldRef<"Lawyer", 'DateTime'>
    readonly updatedAt: FieldRef<"Lawyer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lawyer findUnique
   */
  export type LawyerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer findUniqueOrThrow
   */
  export type LawyerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer findFirst
   */
  export type LawyerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer findFirstOrThrow
   */
  export type LawyerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyer to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lawyers.
     */
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer findMany
   */
  export type LawyerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter, which Lawyers to fetch.
     */
    where?: LawyerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lawyers to fetch.
     */
    orderBy?: LawyerOrderByWithRelationInput | LawyerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lawyers.
     */
    cursor?: LawyerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lawyers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lawyers.
     */
    skip?: number
    distinct?: LawyerScalarFieldEnum | LawyerScalarFieldEnum[]
  }

  /**
   * Lawyer create
   */
  export type LawyerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The data needed to create a Lawyer.
     */
    data: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
  }

  /**
   * Lawyer createMany
   */
  export type LawyerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lawyers.
     */
    data: LawyerCreateManyInput | LawyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lawyer createManyAndReturn
   */
  export type LawyerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The data used to create many Lawyers.
     */
    data: LawyerCreateManyInput | LawyerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lawyer update
   */
  export type LawyerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The data needed to update a Lawyer.
     */
    data: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
    /**
     * Choose, which Lawyer to update.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer updateMany
   */
  export type LawyerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lawyers.
     */
    data: XOR<LawyerUpdateManyMutationInput, LawyerUncheckedUpdateManyInput>
    /**
     * Filter which Lawyers to update
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to update.
     */
    limit?: number
  }

  /**
   * Lawyer updateManyAndReturn
   */
  export type LawyerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * The data used to update Lawyers.
     */
    data: XOR<LawyerUpdateManyMutationInput, LawyerUncheckedUpdateManyInput>
    /**
     * Filter which Lawyers to update
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to update.
     */
    limit?: number
  }

  /**
   * Lawyer upsert
   */
  export type LawyerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * The filter to search for the Lawyer to update in case it exists.
     */
    where: LawyerWhereUniqueInput
    /**
     * In case the Lawyer found by the `where` argument doesn't exist, create a new Lawyer with this data.
     */
    create: XOR<LawyerCreateInput, LawyerUncheckedCreateInput>
    /**
     * In case the Lawyer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LawyerUpdateInput, LawyerUncheckedUpdateInput>
  }

  /**
   * Lawyer delete
   */
  export type LawyerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    /**
     * Filter which Lawyer to delete.
     */
    where: LawyerWhereUniqueInput
  }

  /**
   * Lawyer deleteMany
   */
  export type LawyerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lawyers to delete
     */
    where?: LawyerWhereInput
    /**
     * Limit how many Lawyers to delete.
     */
    limit?: number
  }

  /**
   * Lawyer.processes
   */
  export type Lawyer$processesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    where?: ProcessWhereInput
    orderBy?: ProcessOrderByWithRelationInput | ProcessOrderByWithRelationInput[]
    cursor?: ProcessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessScalarFieldEnum | ProcessScalarFieldEnum[]
  }

  /**
   * Lawyer.appointment
   */
  export type Lawyer$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Lawyer.petitions
   */
  export type Lawyer$petitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    where?: PetitionWhereInput
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    cursor?: PetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Lawyer without action
   */
  export type LawyerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    eventType: string | null
    location: string | null
    clientId: string | null
    lawyerId: string | null
    processId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    date: Date | null
    status: $Enums.AppointmentStatus | null
    eventType: string | null
    location: string | null
    clientId: string | null
    lawyerId: string | null
    processId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    date: number
    status: number
    eventType: number
    location: number
    clientId: number
    lawyerId: number
    processId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    status?: true
    eventType?: true
    location?: true
    clientId?: true
    lawyerId?: true
    processId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    status?: true
    eventType?: true
    location?: true
    clientId?: true
    lawyerId?: true
    processId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    date?: true
    status?: true
    eventType?: true
    location?: true
    clientId?: true
    lawyerId?: true
    processId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    title: string
    description: string | null
    date: Date
    status: $Enums.AppointmentStatus
    eventType: string | null
    location: string | null
    clientId: string | null
    lawyerId: string | null
    processId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    eventType?: boolean
    location?: boolean
    clientId?: boolean
    lawyerId?: boolean
    processId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Appointment$clientArgs<ExtArgs>
    lawyer?: boolean | Appointment$lawyerArgs<ExtArgs>
    process?: boolean | Appointment$processArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    eventType?: boolean
    location?: boolean
    clientId?: boolean
    lawyerId?: boolean
    processId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Appointment$clientArgs<ExtArgs>
    lawyer?: boolean | Appointment$lawyerArgs<ExtArgs>
    process?: boolean | Appointment$processArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    eventType?: boolean
    location?: boolean
    clientId?: boolean
    lawyerId?: boolean
    processId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Appointment$clientArgs<ExtArgs>
    lawyer?: boolean | Appointment$lawyerArgs<ExtArgs>
    process?: boolean | Appointment$processArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
    status?: boolean
    eventType?: boolean
    location?: boolean
    clientId?: boolean
    lawyerId?: boolean
    processId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "date" | "status" | "eventType" | "location" | "clientId" | "lawyerId" | "processId" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Appointment$clientArgs<ExtArgs>
    lawyer?: boolean | Appointment$lawyerArgs<ExtArgs>
    process?: boolean | Appointment$processArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Appointment$clientArgs<ExtArgs>
    lawyer?: boolean | Appointment$lawyerArgs<ExtArgs>
    process?: boolean | Appointment$processArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Appointment$clientArgs<ExtArgs>
    lawyer?: boolean | Appointment$lawyerArgs<ExtArgs>
    process?: boolean | Appointment$processArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      lawyer: Prisma.$LawyerPayload<ExtArgs> | null
      process: Prisma.$ProcessPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      date: Date
      status: $Enums.AppointmentStatus
      eventType: string | null
      location: string | null
      clientId: string | null
      lawyerId: string | null
      processId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Appointment$clientArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lawyer<T extends Appointment$lawyerArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$lawyerArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    process<T extends Appointment$processArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$processArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly title: FieldRef<"Appointment", 'String'>
    readonly description: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly eventType: FieldRef<"Appointment", 'String'>
    readonly location: FieldRef<"Appointment", 'String'>
    readonly clientId: FieldRef<"Appointment", 'String'>
    readonly lawyerId: FieldRef<"Appointment", 'String'>
    readonly processId: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.client
   */
  export type Appointment$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Appointment.lawyer
   */
  export type Appointment$lawyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    where?: LawyerWhereInput
  }

  /**
   * Appointment.process
   */
  export type Appointment$processArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    where?: ProcessWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Petition
   */

  export type AggregatePetition = {
    _count: PetitionCountAggregateOutputType | null
    _min: PetitionMinAggregateOutputType | null
    _max: PetitionMaxAggregateOutputType | null
  }

  export type PetitionMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.PetitionType | null
    status: $Enums.PetitionStatus | null
    factsSummary: string | null
    fileUrl: string | null
    protocolNumber: string | null
    processId: string | null
    clientId: string | null
    lawyerId: string | null
  }

  export type PetitionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: $Enums.PetitionType | null
    status: $Enums.PetitionStatus | null
    factsSummary: string | null
    fileUrl: string | null
    protocolNumber: string | null
    processId: string | null
    clientId: string | null
    lawyerId: string | null
  }

  export type PetitionCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    status: number
    factsSummary: number
    fileUrl: number
    protocolNumber: number
    processId: number
    clientId: number
    lawyerId: number
    _all: number
  }


  export type PetitionMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    factsSummary?: true
    fileUrl?: true
    protocolNumber?: true
    processId?: true
    clientId?: true
    lawyerId?: true
  }

  export type PetitionMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    factsSummary?: true
    fileUrl?: true
    protocolNumber?: true
    processId?: true
    clientId?: true
    lawyerId?: true
  }

  export type PetitionCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    status?: true
    factsSummary?: true
    fileUrl?: true
    protocolNumber?: true
    processId?: true
    clientId?: true
    lawyerId?: true
    _all?: true
  }

  export type PetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Petition to aggregate.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Petitions
    **/
    _count?: true | PetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PetitionMaxAggregateInputType
  }

  export type GetPetitionAggregateType<T extends PetitionAggregateArgs> = {
        [P in keyof T & keyof AggregatePetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePetition[P]>
      : GetScalarType<T[P], AggregatePetition[P]>
  }




  export type PetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PetitionWhereInput
    orderBy?: PetitionOrderByWithAggregationInput | PetitionOrderByWithAggregationInput[]
    by: PetitionScalarFieldEnum[] | PetitionScalarFieldEnum
    having?: PetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PetitionCountAggregateInputType | true
    _min?: PetitionMinAggregateInputType
    _max?: PetitionMaxAggregateInputType
  }

  export type PetitionGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: $Enums.PetitionType
    status: $Enums.PetitionStatus
    factsSummary: string | null
    fileUrl: string | null
    protocolNumber: string | null
    processId: string | null
    clientId: string | null
    lawyerId: string | null
    _count: PetitionCountAggregateOutputType | null
    _min: PetitionMinAggregateOutputType | null
    _max: PetitionMaxAggregateOutputType | null
  }

  type GetPetitionGroupByPayload<T extends PetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PetitionGroupByOutputType[P]>
            : GetScalarType<T[P], PetitionGroupByOutputType[P]>
        }
      >
    >


  export type PetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    factsSummary?: boolean
    fileUrl?: boolean
    protocolNumber?: boolean
    processId?: boolean
    clientId?: boolean
    lawyerId?: boolean
    process?: boolean | Petition$processArgs<ExtArgs>
    client?: boolean | Petition$clientArgs<ExtArgs>
    lawyer?: boolean | Petition$lawyerArgs<ExtArgs>
  }, ExtArgs["result"]["petition"]>

  export type PetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    factsSummary?: boolean
    fileUrl?: boolean
    protocolNumber?: boolean
    processId?: boolean
    clientId?: boolean
    lawyerId?: boolean
    process?: boolean | Petition$processArgs<ExtArgs>
    client?: boolean | Petition$clientArgs<ExtArgs>
    lawyer?: boolean | Petition$lawyerArgs<ExtArgs>
  }, ExtArgs["result"]["petition"]>

  export type PetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    factsSummary?: boolean
    fileUrl?: boolean
    protocolNumber?: boolean
    processId?: boolean
    clientId?: boolean
    lawyerId?: boolean
    process?: boolean | Petition$processArgs<ExtArgs>
    client?: boolean | Petition$clientArgs<ExtArgs>
    lawyer?: boolean | Petition$lawyerArgs<ExtArgs>
  }, ExtArgs["result"]["petition"]>

  export type PetitionSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    factsSummary?: boolean
    fileUrl?: boolean
    protocolNumber?: boolean
    processId?: boolean
    clientId?: boolean
    lawyerId?: boolean
  }

  export type PetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "status" | "factsSummary" | "fileUrl" | "protocolNumber" | "processId" | "clientId" | "lawyerId", ExtArgs["result"]["petition"]>
  export type PetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | Petition$processArgs<ExtArgs>
    client?: boolean | Petition$clientArgs<ExtArgs>
    lawyer?: boolean | Petition$lawyerArgs<ExtArgs>
  }
  export type PetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | Petition$processArgs<ExtArgs>
    client?: boolean | Petition$clientArgs<ExtArgs>
    lawyer?: boolean | Petition$lawyerArgs<ExtArgs>
  }
  export type PetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    process?: boolean | Petition$processArgs<ExtArgs>
    client?: boolean | Petition$clientArgs<ExtArgs>
    lawyer?: boolean | Petition$lawyerArgs<ExtArgs>
  }

  export type $PetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Petition"
    objects: {
      process: Prisma.$ProcessPayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
      lawyer: Prisma.$LawyerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: $Enums.PetitionType
      status: $Enums.PetitionStatus
      factsSummary: string | null
      fileUrl: string | null
      protocolNumber: string | null
      processId: string | null
      clientId: string | null
      lawyerId: string | null
    }, ExtArgs["result"]["petition"]>
    composites: {}
  }

  type PetitionGetPayload<S extends boolean | null | undefined | PetitionDefaultArgs> = $Result.GetResult<Prisma.$PetitionPayload, S>

  type PetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PetitionCountAggregateInputType | true
    }

  export interface PetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Petition'], meta: { name: 'Petition' } }
    /**
     * Find zero or one Petition that matches the filter.
     * @param {PetitionFindUniqueArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PetitionFindUniqueArgs>(args: SelectSubset<T, PetitionFindUniqueArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Petition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PetitionFindUniqueOrThrowArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, PetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionFindFirstArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PetitionFindFirstArgs>(args?: SelectSubset<T, PetitionFindFirstArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Petition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionFindFirstOrThrowArgs} args - Arguments to find a Petition
     * @example
     * // Get one Petition
     * const petition = await prisma.petition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, PetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Petitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Petitions
     * const petitions = await prisma.petition.findMany()
     * 
     * // Get first 10 Petitions
     * const petitions = await prisma.petition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const petitionWithIdOnly = await prisma.petition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PetitionFindManyArgs>(args?: SelectSubset<T, PetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Petition.
     * @param {PetitionCreateArgs} args - Arguments to create a Petition.
     * @example
     * // Create one Petition
     * const Petition = await prisma.petition.create({
     *   data: {
     *     // ... data to create a Petition
     *   }
     * })
     * 
     */
    create<T extends PetitionCreateArgs>(args: SelectSubset<T, PetitionCreateArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Petitions.
     * @param {PetitionCreateManyArgs} args - Arguments to create many Petitions.
     * @example
     * // Create many Petitions
     * const petition = await prisma.petition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PetitionCreateManyArgs>(args?: SelectSubset<T, PetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Petitions and returns the data saved in the database.
     * @param {PetitionCreateManyAndReturnArgs} args - Arguments to create many Petitions.
     * @example
     * // Create many Petitions
     * const petition = await prisma.petition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Petitions and only return the `id`
     * const petitionWithIdOnly = await prisma.petition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, PetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Petition.
     * @param {PetitionDeleteArgs} args - Arguments to delete one Petition.
     * @example
     * // Delete one Petition
     * const Petition = await prisma.petition.delete({
     *   where: {
     *     // ... filter to delete one Petition
     *   }
     * })
     * 
     */
    delete<T extends PetitionDeleteArgs>(args: SelectSubset<T, PetitionDeleteArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Petition.
     * @param {PetitionUpdateArgs} args - Arguments to update one Petition.
     * @example
     * // Update one Petition
     * const petition = await prisma.petition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PetitionUpdateArgs>(args: SelectSubset<T, PetitionUpdateArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Petitions.
     * @param {PetitionDeleteManyArgs} args - Arguments to filter Petitions to delete.
     * @example
     * // Delete a few Petitions
     * const { count } = await prisma.petition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PetitionDeleteManyArgs>(args?: SelectSubset<T, PetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Petitions
     * const petition = await prisma.petition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PetitionUpdateManyArgs>(args: SelectSubset<T, PetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Petitions and returns the data updated in the database.
     * @param {PetitionUpdateManyAndReturnArgs} args - Arguments to update many Petitions.
     * @example
     * // Update many Petitions
     * const petition = await prisma.petition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Petitions and only return the `id`
     * const petitionWithIdOnly = await prisma.petition.updateManyAndReturn({
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
    updateManyAndReturn<T extends PetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, PetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Petition.
     * @param {PetitionUpsertArgs} args - Arguments to update or create a Petition.
     * @example
     * // Update or create a Petition
     * const petition = await prisma.petition.upsert({
     *   create: {
     *     // ... data to create a Petition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Petition we want to update
     *   }
     * })
     */
    upsert<T extends PetitionUpsertArgs>(args: SelectSubset<T, PetitionUpsertArgs<ExtArgs>>): Prisma__PetitionClient<$Result.GetResult<Prisma.$PetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Petitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionCountArgs} args - Arguments to filter Petitions to count.
     * @example
     * // Count the number of Petitions
     * const count = await prisma.petition.count({
     *   where: {
     *     // ... the filter for the Petitions we want to count
     *   }
     * })
    **/
    count<T extends PetitionCountArgs>(
      args?: Subset<T, PetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Petition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PetitionAggregateArgs>(args: Subset<T, PetitionAggregateArgs>): Prisma.PrismaPromise<GetPetitionAggregateType<T>>

    /**
     * Group by Petition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PetitionGroupByArgs} args - Group by arguments.
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
      T extends PetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PetitionGroupByArgs['orderBy'] }
        : { orderBy?: PetitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Petition model
   */
  readonly fields: PetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Petition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    process<T extends Petition$processArgs<ExtArgs> = {}>(args?: Subset<T, Petition$processArgs<ExtArgs>>): Prisma__ProcessClient<$Result.GetResult<Prisma.$ProcessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Petition$clientArgs<ExtArgs> = {}>(args?: Subset<T, Petition$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lawyer<T extends Petition$lawyerArgs<ExtArgs> = {}>(args?: Subset<T, Petition$lawyerArgs<ExtArgs>>): Prisma__LawyerClient<$Result.GetResult<Prisma.$LawyerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Petition model
   */
  interface PetitionFieldRefs {
    readonly id: FieldRef<"Petition", 'String'>
    readonly title: FieldRef<"Petition", 'String'>
    readonly description: FieldRef<"Petition", 'String'>
    readonly type: FieldRef<"Petition", 'PetitionType'>
    readonly status: FieldRef<"Petition", 'PetitionStatus'>
    readonly factsSummary: FieldRef<"Petition", 'String'>
    readonly fileUrl: FieldRef<"Petition", 'String'>
    readonly protocolNumber: FieldRef<"Petition", 'String'>
    readonly processId: FieldRef<"Petition", 'String'>
    readonly clientId: FieldRef<"Petition", 'String'>
    readonly lawyerId: FieldRef<"Petition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Petition findUnique
   */
  export type PetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition findUniqueOrThrow
   */
  export type PetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition findFirst
   */
  export type PetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Petitions.
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petitions.
     */
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Petition findFirstOrThrow
   */
  export type PetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petition to fetch.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Petitions.
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Petitions.
     */
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Petition findMany
   */
  export type PetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter, which Petitions to fetch.
     */
    where?: PetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Petitions to fetch.
     */
    orderBy?: PetitionOrderByWithRelationInput | PetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Petitions.
     */
    cursor?: PetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Petitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Petitions.
     */
    skip?: number
    distinct?: PetitionScalarFieldEnum | PetitionScalarFieldEnum[]
  }

  /**
   * Petition create
   */
  export type PetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Petition.
     */
    data: XOR<PetitionCreateInput, PetitionUncheckedCreateInput>
  }

  /**
   * Petition createMany
   */
  export type PetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Petitions.
     */
    data: PetitionCreateManyInput | PetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Petition createManyAndReturn
   */
  export type PetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Petitions.
     */
    data: PetitionCreateManyInput | PetitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Petition update
   */
  export type PetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Petition.
     */
    data: XOR<PetitionUpdateInput, PetitionUncheckedUpdateInput>
    /**
     * Choose, which Petition to update.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition updateMany
   */
  export type PetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Petitions.
     */
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyInput>
    /**
     * Filter which Petitions to update
     */
    where?: PetitionWhereInput
    /**
     * Limit how many Petitions to update.
     */
    limit?: number
  }

  /**
   * Petition updateManyAndReturn
   */
  export type PetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * The data used to update Petitions.
     */
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyInput>
    /**
     * Filter which Petitions to update
     */
    where?: PetitionWhereInput
    /**
     * Limit how many Petitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Petition upsert
   */
  export type PetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Petition to update in case it exists.
     */
    where: PetitionWhereUniqueInput
    /**
     * In case the Petition found by the `where` argument doesn't exist, create a new Petition with this data.
     */
    create: XOR<PetitionCreateInput, PetitionUncheckedCreateInput>
    /**
     * In case the Petition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PetitionUpdateInput, PetitionUncheckedUpdateInput>
  }

  /**
   * Petition delete
   */
  export type PetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
    /**
     * Filter which Petition to delete.
     */
    where: PetitionWhereUniqueInput
  }

  /**
   * Petition deleteMany
   */
  export type PetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Petitions to delete
     */
    where?: PetitionWhereInput
    /**
     * Limit how many Petitions to delete.
     */
    limit?: number
  }

  /**
   * Petition.process
   */
  export type Petition$processArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Process
     */
    select?: ProcessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Process
     */
    omit?: ProcessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessInclude<ExtArgs> | null
    where?: ProcessWhereInput
  }

  /**
   * Petition.client
   */
  export type Petition$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Petition.lawyer
   */
  export type Petition$lawyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lawyer
     */
    select?: LawyerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lawyer
     */
    omit?: LawyerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LawyerInclude<ExtArgs> | null
    where?: LawyerWhereInput
  }

  /**
   * Petition without action
   */
  export type PetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Petition
     */
    select?: PetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Petition
     */
    omit?: PetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PetitionInclude<ExtArgs> | null
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
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    active: 'active',
    oab: 'oab',
    oab_uf: 'oab_uf',
    cpf: 'cpf',
    phone: 'phone',
    specialty: 'specialty',
    office: 'office',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    cpf: 'cpf',
    cnpj: 'cnpj',
    cpf_cnpj: 'cpf_cnpj',
    address: 'address',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code',
    notes: 'notes',
    dateOfBirth: 'dateOfBirth',
    maritalStatus: 'maritalStatus',
    profession: 'profession',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ProcessScalarFieldEnum: {
    id: 'id',
    processNumber: 'processNumber',
    court: 'court',
    type: 'type',
    status: 'status',
    lawyerId: 'lawyerId',
    clientId: 'clientId',
    hearingDate: 'hearingDate',
    caseValue: 'caseValue',
    internalNotes: 'internalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcessScalarFieldEnum = (typeof ProcessScalarFieldEnum)[keyof typeof ProcessScalarFieldEnum]


  export const LawyerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    oabNumber: 'oabNumber',
    specialty: 'specialty',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LawyerScalarFieldEnum = (typeof LawyerScalarFieldEnum)[keyof typeof LawyerScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    date: 'date',
    status: 'status',
    eventType: 'eventType',
    location: 'location',
    clientId: 'clientId',
    lawyerId: 'lawyerId',
    processId: 'processId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const PetitionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    status: 'status',
    factsSummary: 'factsSummary',
    fileUrl: 'fileUrl',
    protocolNumber: 'protocolNumber',
    processId: 'processId',
    clientId: 'clientId',
    lawyerId: 'lawyerId'
  };

  export type PetitionScalarFieldEnum = (typeof PetitionScalarFieldEnum)[keyof typeof PetitionScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'PetitionType'
   */
  export type EnumPetitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetitionType'>
    


  /**
   * Reference to a field of type 'PetitionType[]'
   */
  export type ListEnumPetitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetitionType[]'>
    


  /**
   * Reference to a field of type 'PetitionStatus'
   */
  export type EnumPetitionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetitionStatus'>
    


  /**
   * Reference to a field of type 'PetitionStatus[]'
   */
  export type ListEnumPetitionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PetitionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    oab?: StringNullableFilter<"User"> | string | null
    oab_uf?: StringNullableFilter<"User"> | string | null
    cpf?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    specialty?: StringNullableFilter<"User"> | string | null
    office?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    oab?: SortOrderInput | SortOrder
    oab_uf?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    specialty?: SortOrderInput | SortOrder
    office?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    active?: BoolFilter<"User"> | boolean
    oab?: StringNullableFilter<"User"> | string | null
    oab_uf?: StringNullableFilter<"User"> | string | null
    cpf?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    specialty?: StringNullableFilter<"User"> | string | null
    office?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    oab?: SortOrderInput | SortOrder
    oab_uf?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    specialty?: SortOrderInput | SortOrder
    office?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    active?: BoolWithAggregatesFilter<"User"> | boolean
    oab?: StringNullableWithAggregatesFilter<"User"> | string | null
    oab_uf?: StringNullableWithAggregatesFilter<"User"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    specialty?: StringNullableWithAggregatesFilter<"User"> | string | null
    office?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    cpf?: StringNullableFilter<"Client"> | string | null
    cnpj?: StringNullableFilter<"Client"> | string | null
    cpf_cnpj?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    zip_code?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Client"> | Date | string | null
    maritalStatus?: StringNullableFilter<"Client"> | string | null
    profession?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    appointments?: AppointmentListRelationFilter
    processes?: ProcessListRelationFilter
    petitions?: PetitionListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    cpf_cnpj?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointments?: AppointmentOrderByRelationAggregateInput
    processes?: ProcessOrderByRelationAggregateInput
    petitions?: PetitionOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    cnpj?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    cpf_cnpj?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    city?: StringNullableFilter<"Client"> | string | null
    state?: StringNullableFilter<"Client"> | string | null
    zip_code?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Client"> | Date | string | null
    maritalStatus?: StringNullableFilter<"Client"> | string | null
    profession?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    appointments?: AppointmentListRelationFilter
    processes?: ProcessListRelationFilter
    petitions?: PetitionListRelationFilter
  }, "id" | "cpf" | "cnpj">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    cpf_cnpj?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    profession?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    cpf?: StringNullableWithAggregatesFilter<"Client"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"Client"> | string | null
    cpf_cnpj?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    city?: StringNullableWithAggregatesFilter<"Client"> | string | null
    state?: StringNullableWithAggregatesFilter<"Client"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    maritalStatus?: StringNullableWithAggregatesFilter<"Client"> | string | null
    profession?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type ProcessWhereInput = {
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    id?: StringFilter<"Process"> | string
    processNumber?: StringFilter<"Process"> | string
    court?: StringFilter<"Process"> | string
    type?: StringFilter<"Process"> | string
    status?: StringFilter<"Process"> | string
    lawyerId?: StringNullableFilter<"Process"> | string | null
    clientId?: StringNullableFilter<"Process"> | string | null
    hearingDate?: DateTimeFilter<"Process"> | Date | string
    caseValue?: DecimalFilter<"Process"> | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFilter<"Process"> | string
    createdAt?: DateTimeFilter<"Process"> | Date | string
    updatedAt?: DateTimeFilter<"Process"> | Date | string
    lawyer?: XOR<LawyerNullableScalarRelationFilter, LawyerWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    appointment?: AppointmentListRelationFilter
    petitions?: PetitionListRelationFilter
  }

  export type ProcessOrderByWithRelationInput = {
    id?: SortOrder
    processNumber?: SortOrder
    court?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lawyerId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    hearingDate?: SortOrder
    caseValue?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lawyer?: LawyerOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    appointment?: AppointmentOrderByRelationAggregateInput
    petitions?: PetitionOrderByRelationAggregateInput
  }

  export type ProcessWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    processNumber?: string
    AND?: ProcessWhereInput | ProcessWhereInput[]
    OR?: ProcessWhereInput[]
    NOT?: ProcessWhereInput | ProcessWhereInput[]
    court?: StringFilter<"Process"> | string
    type?: StringFilter<"Process"> | string
    status?: StringFilter<"Process"> | string
    lawyerId?: StringNullableFilter<"Process"> | string | null
    clientId?: StringNullableFilter<"Process"> | string | null
    hearingDate?: DateTimeFilter<"Process"> | Date | string
    caseValue?: DecimalFilter<"Process"> | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFilter<"Process"> | string
    createdAt?: DateTimeFilter<"Process"> | Date | string
    updatedAt?: DateTimeFilter<"Process"> | Date | string
    lawyer?: XOR<LawyerNullableScalarRelationFilter, LawyerWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    appointment?: AppointmentListRelationFilter
    petitions?: PetitionListRelationFilter
  }, "id" | "processNumber">

  export type ProcessOrderByWithAggregationInput = {
    id?: SortOrder
    processNumber?: SortOrder
    court?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lawyerId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    hearingDate?: SortOrder
    caseValue?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcessCountOrderByAggregateInput
    _avg?: ProcessAvgOrderByAggregateInput
    _max?: ProcessMaxOrderByAggregateInput
    _min?: ProcessMinOrderByAggregateInput
    _sum?: ProcessSumOrderByAggregateInput
  }

  export type ProcessScalarWhereWithAggregatesInput = {
    AND?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    OR?: ProcessScalarWhereWithAggregatesInput[]
    NOT?: ProcessScalarWhereWithAggregatesInput | ProcessScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Process"> | string
    processNumber?: StringWithAggregatesFilter<"Process"> | string
    court?: StringWithAggregatesFilter<"Process"> | string
    type?: StringWithAggregatesFilter<"Process"> | string
    status?: StringWithAggregatesFilter<"Process"> | string
    lawyerId?: StringNullableWithAggregatesFilter<"Process"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Process"> | string | null
    hearingDate?: DateTimeWithAggregatesFilter<"Process"> | Date | string
    caseValue?: DecimalWithAggregatesFilter<"Process"> | Decimal | DecimalJsLike | number | string
    internalNotes?: StringWithAggregatesFilter<"Process"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Process"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Process"> | Date | string
  }

  export type LawyerWhereInput = {
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    id?: StringFilter<"Lawyer"> | string
    name?: StringFilter<"Lawyer"> | string
    email?: StringFilter<"Lawyer"> | string
    oabNumber?: StringFilter<"Lawyer"> | string
    specialty?: StringFilter<"Lawyer"> | string
    phone?: StringNullableFilter<"Lawyer"> | string | null
    createdAt?: DateTimeFilter<"Lawyer"> | Date | string
    updatedAt?: DateTimeFilter<"Lawyer"> | Date | string
    processes?: ProcessListRelationFilter
    appointment?: AppointmentListRelationFilter
    petitions?: PetitionListRelationFilter
  }

  export type LawyerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    oabNumber?: SortOrder
    specialty?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processes?: ProcessOrderByRelationAggregateInput
    appointment?: AppointmentOrderByRelationAggregateInput
    petitions?: PetitionOrderByRelationAggregateInput
  }

  export type LawyerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    oabNumber?: string
    AND?: LawyerWhereInput | LawyerWhereInput[]
    OR?: LawyerWhereInput[]
    NOT?: LawyerWhereInput | LawyerWhereInput[]
    name?: StringFilter<"Lawyer"> | string
    specialty?: StringFilter<"Lawyer"> | string
    phone?: StringNullableFilter<"Lawyer"> | string | null
    createdAt?: DateTimeFilter<"Lawyer"> | Date | string
    updatedAt?: DateTimeFilter<"Lawyer"> | Date | string
    processes?: ProcessListRelationFilter
    appointment?: AppointmentListRelationFilter
    petitions?: PetitionListRelationFilter
  }, "id" | "email" | "oabNumber">

  export type LawyerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    oabNumber?: SortOrder
    specialty?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LawyerCountOrderByAggregateInput
    _max?: LawyerMaxOrderByAggregateInput
    _min?: LawyerMinOrderByAggregateInput
  }

  export type LawyerScalarWhereWithAggregatesInput = {
    AND?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    OR?: LawyerScalarWhereWithAggregatesInput[]
    NOT?: LawyerScalarWhereWithAggregatesInput | LawyerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lawyer"> | string
    name?: StringWithAggregatesFilter<"Lawyer"> | string
    email?: StringWithAggregatesFilter<"Lawyer"> | string
    oabNumber?: StringWithAggregatesFilter<"Lawyer"> | string
    specialty?: StringWithAggregatesFilter<"Lawyer"> | string
    phone?: StringNullableWithAggregatesFilter<"Lawyer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lawyer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lawyer"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    eventType?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    clientId?: StringNullableFilter<"Appointment"> | string | null
    lawyerId?: StringNullableFilter<"Appointment"> | string | null
    processId?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    lawyer?: XOR<LawyerNullableScalarRelationFilter, LawyerWhereInput> | null
    process?: XOR<ProcessNullableScalarRelationFilter, ProcessWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    eventType?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    lawyerId?: SortOrderInput | SortOrder
    processId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    lawyer?: LawyerOrderByWithRelationInput
    process?: ProcessOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    eventType?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    clientId?: StringNullableFilter<"Appointment"> | string | null
    lawyerId?: StringNullableFilter<"Appointment"> | string | null
    processId?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    lawyer?: XOR<LawyerNullableScalarRelationFilter, LawyerWhereInput> | null
    process?: XOR<ProcessNullableScalarRelationFilter, ProcessWhereInput> | null
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    eventType?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    lawyerId?: SortOrderInput | SortOrder
    processId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    title?: StringWithAggregatesFilter<"Appointment"> | string
    description?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    eventType?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    location?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    lawyerId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    processId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type PetitionWhereInput = {
    AND?: PetitionWhereInput | PetitionWhereInput[]
    OR?: PetitionWhereInput[]
    NOT?: PetitionWhereInput | PetitionWhereInput[]
    id?: StringFilter<"Petition"> | string
    title?: StringFilter<"Petition"> | string
    description?: StringNullableFilter<"Petition"> | string | null
    type?: EnumPetitionTypeFilter<"Petition"> | $Enums.PetitionType
    status?: EnumPetitionStatusFilter<"Petition"> | $Enums.PetitionStatus
    factsSummary?: StringNullableFilter<"Petition"> | string | null
    fileUrl?: StringNullableFilter<"Petition"> | string | null
    protocolNumber?: StringNullableFilter<"Petition"> | string | null
    processId?: StringNullableFilter<"Petition"> | string | null
    clientId?: StringNullableFilter<"Petition"> | string | null
    lawyerId?: StringNullableFilter<"Petition"> | string | null
    process?: XOR<ProcessNullableScalarRelationFilter, ProcessWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    lawyer?: XOR<LawyerNullableScalarRelationFilter, LawyerWhereInput> | null
  }

  export type PetitionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    factsSummary?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    protocolNumber?: SortOrderInput | SortOrder
    processId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    lawyerId?: SortOrderInput | SortOrder
    process?: ProcessOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
    lawyer?: LawyerOrderByWithRelationInput
  }

  export type PetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PetitionWhereInput | PetitionWhereInput[]
    OR?: PetitionWhereInput[]
    NOT?: PetitionWhereInput | PetitionWhereInput[]
    title?: StringFilter<"Petition"> | string
    description?: StringNullableFilter<"Petition"> | string | null
    type?: EnumPetitionTypeFilter<"Petition"> | $Enums.PetitionType
    status?: EnumPetitionStatusFilter<"Petition"> | $Enums.PetitionStatus
    factsSummary?: StringNullableFilter<"Petition"> | string | null
    fileUrl?: StringNullableFilter<"Petition"> | string | null
    protocolNumber?: StringNullableFilter<"Petition"> | string | null
    processId?: StringNullableFilter<"Petition"> | string | null
    clientId?: StringNullableFilter<"Petition"> | string | null
    lawyerId?: StringNullableFilter<"Petition"> | string | null
    process?: XOR<ProcessNullableScalarRelationFilter, ProcessWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    lawyer?: XOR<LawyerNullableScalarRelationFilter, LawyerWhereInput> | null
  }, "id">

  export type PetitionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    factsSummary?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    protocolNumber?: SortOrderInput | SortOrder
    processId?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    lawyerId?: SortOrderInput | SortOrder
    _count?: PetitionCountOrderByAggregateInput
    _max?: PetitionMaxOrderByAggregateInput
    _min?: PetitionMinOrderByAggregateInput
  }

  export type PetitionScalarWhereWithAggregatesInput = {
    AND?: PetitionScalarWhereWithAggregatesInput | PetitionScalarWhereWithAggregatesInput[]
    OR?: PetitionScalarWhereWithAggregatesInput[]
    NOT?: PetitionScalarWhereWithAggregatesInput | PetitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Petition"> | string
    title?: StringWithAggregatesFilter<"Petition"> | string
    description?: StringNullableWithAggregatesFilter<"Petition"> | string | null
    type?: EnumPetitionTypeWithAggregatesFilter<"Petition"> | $Enums.PetitionType
    status?: EnumPetitionStatusWithAggregatesFilter<"Petition"> | $Enums.PetitionStatus
    factsSummary?: StringNullableWithAggregatesFilter<"Petition"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Petition"> | string | null
    protocolNumber?: StringNullableWithAggregatesFilter<"Petition"> | string | null
    processId?: StringNullableWithAggregatesFilter<"Petition"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Petition"> | string | null
    lawyerId?: StringNullableWithAggregatesFilter<"Petition"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: string
    active?: boolean
    oab?: string | null
    oab_uf?: string | null
    cpf?: string | null
    phone?: string | null
    specialty?: string | null
    office?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: string
    active?: boolean
    oab?: string | null
    oab_uf?: string | null
    cpf?: string | null
    phone?: string | null
    specialty?: string | null
    office?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    oab?: NullableStringFieldUpdateOperationsInput | string | null
    oab_uf?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    oab?: NullableStringFieldUpdateOperationsInput | string | null
    oab_uf?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: string
    active?: boolean
    oab?: string | null
    oab_uf?: string | null
    cpf?: string | null
    phone?: string | null
    specialty?: string | null
    office?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    oab?: NullableStringFieldUpdateOperationsInput | string | null
    oab_uf?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    oab?: NullableStringFieldUpdateOperationsInput | string | null
    oab_uf?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: NullableStringFieldUpdateOperationsInput | string | null
    office?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    processes?: ProcessCreateNestedManyWithoutClientInput
    petitions?: PetitionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    processes?: ProcessUncheckedCreateNestedManyWithoutClientInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    processes?: ProcessUpdateManyWithoutClientNestedInput
    petitions?: PetitionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    processes?: ProcessUncheckedUpdateManyWithoutClientNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessCreateInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawyer?: LawyerCreateNestedOneWithoutProcessesInput
    client?: ClientCreateNestedOneWithoutProcessesInput
    appointment?: AppointmentCreateNestedManyWithoutProcessInput
    petitions?: PetitionCreateNestedManyWithoutProcessInput
  }

  export type ProcessUncheckedCreateInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    lawyerId?: string | null
    clientId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedManyWithoutProcessInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutProcessInput
  }

  export type ProcessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer?: LawyerUpdateOneWithoutProcessesNestedInput
    client?: ClientUpdateOneWithoutProcessesNestedInput
    appointment?: AppointmentUpdateManyWithoutProcessNestedInput
    petitions?: PetitionUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateManyWithoutProcessNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutProcessNestedInput
  }

  export type ProcessCreateManyInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    lawyerId?: string | null
    clientId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerCreateInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessCreateNestedManyWithoutLawyerInput
    appointment?: AppointmentCreateNestedManyWithoutLawyerInput
    petitions?: PetitionCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessUncheckedCreateNestedManyWithoutLawyerInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLawyerInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUpdateManyWithoutLawyerNestedInput
    appointment?: AppointmentUpdateManyWithoutLawyerNestedInput
    petitions?: PetitionUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUncheckedUpdateManyWithoutLawyerNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutLawyerNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerCreateManyInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LawyerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LawyerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutAppointmentsInput
    lawyer?: LawyerCreateNestedOneWithoutAppointmentInput
    process?: ProcessCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    clientId?: string | null
    lawyerId?: string | null
    processId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutAppointmentsNestedInput
    lawyer?: LawyerUpdateOneWithoutAppointmentNestedInput
    process?: ProcessUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    clientId?: string | null
    lawyerId?: string | null
    processId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    process?: ProcessCreateNestedOneWithoutPetitionsInput
    client?: ClientCreateNestedOneWithoutPetitionsInput
    lawyer?: LawyerCreateNestedOneWithoutPetitionsInput
  }

  export type PetitionUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    processId?: string | null
    clientId?: string | null
    lawyerId?: string | null
  }

  export type PetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneWithoutPetitionsNestedInput
    client?: ClientUpdateOneWithoutPetitionsNestedInput
    lawyer?: LawyerUpdateOneWithoutPetitionsNestedInput
  }

  export type PetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetitionCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    processId?: string | null
    clientId?: string | null
    lawyerId?: string | null
  }

  export type PetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    oab?: SortOrder
    oab_uf?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    specialty?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    oab?: SortOrder
    oab_uf?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    specialty?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    active?: SortOrder
    oab?: SortOrder
    oab_uf?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    specialty?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type ProcessListRelationFilter = {
    every?: ProcessWhereInput
    some?: ProcessWhereInput
    none?: ProcessWhereInput
  }

  export type PetitionListRelationFilter = {
    every?: PetitionWhereInput
    some?: PetitionWhereInput
    none?: PetitionWhereInput
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PetitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    cpf_cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    notes?: SortOrder
    dateOfBirth?: SortOrder
    maritalStatus?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    cpf_cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    notes?: SortOrder
    dateOfBirth?: SortOrder
    maritalStatus?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    cpf_cnpj?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
    notes?: SortOrder
    dateOfBirth?: SortOrder
    maritalStatus?: SortOrder
    profession?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type LawyerNullableScalarRelationFilter = {
    is?: LawyerWhereInput | null
    isNot?: LawyerWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type ProcessCountOrderByAggregateInput = {
    id?: SortOrder
    processNumber?: SortOrder
    court?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    hearingDate?: SortOrder
    caseValue?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessAvgOrderByAggregateInput = {
    caseValue?: SortOrder
  }

  export type ProcessMaxOrderByAggregateInput = {
    id?: SortOrder
    processNumber?: SortOrder
    court?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    hearingDate?: SortOrder
    caseValue?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessMinOrderByAggregateInput = {
    id?: SortOrder
    processNumber?: SortOrder
    court?: SortOrder
    type?: SortOrder
    status?: SortOrder
    lawyerId?: SortOrder
    clientId?: SortOrder
    hearingDate?: SortOrder
    caseValue?: SortOrder
    internalNotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcessSumOrderByAggregateInput = {
    caseValue?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type LawyerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    oabNumber?: SortOrder
    specialty?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawyerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    oabNumber?: SortOrder
    specialty?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LawyerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    oabNumber?: SortOrder
    specialty?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type ProcessNullableScalarRelationFilter = {
    is?: ProcessWhereInput | null
    isNot?: ProcessWhereInput | null
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    processId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    processId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    status?: SortOrder
    eventType?: SortOrder
    location?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
    processId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumPetitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionType | EnumPetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionTypeFilter<$PrismaModel> | $Enums.PetitionType
  }

  export type EnumPetitionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusFilter<$PrismaModel> | $Enums.PetitionStatus
  }

  export type PetitionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    factsSummary?: SortOrder
    fileUrl?: SortOrder
    protocolNumber?: SortOrder
    processId?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type PetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    factsSummary?: SortOrder
    fileUrl?: SortOrder
    protocolNumber?: SortOrder
    processId?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type PetitionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    factsSummary?: SortOrder
    fileUrl?: SortOrder
    protocolNumber?: SortOrder
    processId?: SortOrder
    clientId?: SortOrder
    lawyerId?: SortOrder
  }

  export type EnumPetitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionType | EnumPetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PetitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetitionTypeFilter<$PrismaModel>
    _max?: NestedEnumPetitionTypeFilter<$PrismaModel>
  }

  export type EnumPetitionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetitionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetitionStatusFilter<$PrismaModel>
    _max?: NestedEnumPetitionStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppointmentCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ProcessCreateNestedManyWithoutClientInput = {
    create?: XOR<ProcessCreateWithoutClientInput, ProcessUncheckedCreateWithoutClientInput> | ProcessCreateWithoutClientInput[] | ProcessUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutClientInput | ProcessCreateOrConnectWithoutClientInput[]
    createMany?: ProcessCreateManyClientInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type PetitionCreateNestedManyWithoutClientInput = {
    create?: XOR<PetitionCreateWithoutClientInput, PetitionUncheckedCreateWithoutClientInput> | PetitionCreateWithoutClientInput[] | PetitionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutClientInput | PetitionCreateOrConnectWithoutClientInput[]
    createMany?: PetitionCreateManyClientInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type ProcessUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ProcessCreateWithoutClientInput, ProcessUncheckedCreateWithoutClientInput> | ProcessCreateWithoutClientInput[] | ProcessUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutClientInput | ProcessCreateOrConnectWithoutClientInput[]
    createMany?: ProcessCreateManyClientInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type PetitionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PetitionCreateWithoutClientInput, PetitionUncheckedCreateWithoutClientInput> | PetitionCreateWithoutClientInput[] | PetitionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutClientInput | PetitionCreateOrConnectWithoutClientInput[]
    createMany?: PetitionCreateManyClientInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AppointmentUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ProcessUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProcessCreateWithoutClientInput, ProcessUncheckedCreateWithoutClientInput> | ProcessCreateWithoutClientInput[] | ProcessUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutClientInput | ProcessCreateOrConnectWithoutClientInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutClientInput | ProcessUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProcessCreateManyClientInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutClientInput | ProcessUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutClientInput | ProcessUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type PetitionUpdateManyWithoutClientNestedInput = {
    create?: XOR<PetitionCreateWithoutClientInput, PetitionUncheckedCreateWithoutClientInput> | PetitionCreateWithoutClientInput[] | PetitionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutClientInput | PetitionCreateOrConnectWithoutClientInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutClientInput | PetitionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PetitionCreateManyClientInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutClientInput | PetitionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutClientInput | PetitionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput> | AppointmentCreateWithoutClientInput[] | AppointmentUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutClientInput | AppointmentCreateOrConnectWithoutClientInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutClientInput | AppointmentUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AppointmentCreateManyClientInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutClientInput | AppointmentUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutClientInput | AppointmentUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type ProcessUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ProcessCreateWithoutClientInput, ProcessUncheckedCreateWithoutClientInput> | ProcessCreateWithoutClientInput[] | ProcessUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutClientInput | ProcessCreateOrConnectWithoutClientInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutClientInput | ProcessUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ProcessCreateManyClientInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutClientInput | ProcessUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutClientInput | ProcessUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type PetitionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PetitionCreateWithoutClientInput, PetitionUncheckedCreateWithoutClientInput> | PetitionCreateWithoutClientInput[] | PetitionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutClientInput | PetitionCreateOrConnectWithoutClientInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutClientInput | PetitionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PetitionCreateManyClientInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutClientInput | PetitionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutClientInput | PetitionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type LawyerCreateNestedOneWithoutProcessesInput = {
    create?: XOR<LawyerCreateWithoutProcessesInput, LawyerUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutProcessesInput
    connect?: LawyerWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutProcessesInput = {
    create?: XOR<ClientCreateWithoutProcessesInput, ClientUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProcessesInput
    connect?: ClientWhereUniqueInput
  }

  export type AppointmentCreateNestedManyWithoutProcessInput = {
    create?: XOR<AppointmentCreateWithoutProcessInput, AppointmentUncheckedCreateWithoutProcessInput> | AppointmentCreateWithoutProcessInput[] | AppointmentUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcessInput | AppointmentCreateOrConnectWithoutProcessInput[]
    createMany?: AppointmentCreateManyProcessInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PetitionCreateNestedManyWithoutProcessInput = {
    create?: XOR<PetitionCreateWithoutProcessInput, PetitionUncheckedCreateWithoutProcessInput> | PetitionCreateWithoutProcessInput[] | PetitionUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutProcessInput | PetitionCreateOrConnectWithoutProcessInput[]
    createMany?: PetitionCreateManyProcessInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutProcessInput = {
    create?: XOR<AppointmentCreateWithoutProcessInput, AppointmentUncheckedCreateWithoutProcessInput> | AppointmentCreateWithoutProcessInput[] | AppointmentUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcessInput | AppointmentCreateOrConnectWithoutProcessInput[]
    createMany?: AppointmentCreateManyProcessInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PetitionUncheckedCreateNestedManyWithoutProcessInput = {
    create?: XOR<PetitionCreateWithoutProcessInput, PetitionUncheckedCreateWithoutProcessInput> | PetitionCreateWithoutProcessInput[] | PetitionUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutProcessInput | PetitionCreateOrConnectWithoutProcessInput[]
    createMany?: PetitionCreateManyProcessInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LawyerUpdateOneWithoutProcessesNestedInput = {
    create?: XOR<LawyerCreateWithoutProcessesInput, LawyerUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutProcessesInput
    upsert?: LawyerUpsertWithoutProcessesInput
    disconnect?: LawyerWhereInput | boolean
    delete?: LawyerWhereInput | boolean
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutProcessesInput, LawyerUpdateWithoutProcessesInput>, LawyerUncheckedUpdateWithoutProcessesInput>
  }

  export type ClientUpdateOneWithoutProcessesNestedInput = {
    create?: XOR<ClientCreateWithoutProcessesInput, ClientUncheckedCreateWithoutProcessesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutProcessesInput
    upsert?: ClientUpsertWithoutProcessesInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutProcessesInput, ClientUpdateWithoutProcessesInput>, ClientUncheckedUpdateWithoutProcessesInput>
  }

  export type AppointmentUpdateManyWithoutProcessNestedInput = {
    create?: XOR<AppointmentCreateWithoutProcessInput, AppointmentUncheckedCreateWithoutProcessInput> | AppointmentCreateWithoutProcessInput[] | AppointmentUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcessInput | AppointmentCreateOrConnectWithoutProcessInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProcessInput | AppointmentUpsertWithWhereUniqueWithoutProcessInput[]
    createMany?: AppointmentCreateManyProcessInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProcessInput | AppointmentUpdateWithWhereUniqueWithoutProcessInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProcessInput | AppointmentUpdateManyWithWhereWithoutProcessInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PetitionUpdateManyWithoutProcessNestedInput = {
    create?: XOR<PetitionCreateWithoutProcessInput, PetitionUncheckedCreateWithoutProcessInput> | PetitionCreateWithoutProcessInput[] | PetitionUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutProcessInput | PetitionCreateOrConnectWithoutProcessInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutProcessInput | PetitionUpsertWithWhereUniqueWithoutProcessInput[]
    createMany?: PetitionCreateManyProcessInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutProcessInput | PetitionUpdateWithWhereUniqueWithoutProcessInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutProcessInput | PetitionUpdateManyWithWhereWithoutProcessInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutProcessNestedInput = {
    create?: XOR<AppointmentCreateWithoutProcessInput, AppointmentUncheckedCreateWithoutProcessInput> | AppointmentCreateWithoutProcessInput[] | AppointmentUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutProcessInput | AppointmentCreateOrConnectWithoutProcessInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutProcessInput | AppointmentUpsertWithWhereUniqueWithoutProcessInput[]
    createMany?: AppointmentCreateManyProcessInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutProcessInput | AppointmentUpdateWithWhereUniqueWithoutProcessInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutProcessInput | AppointmentUpdateManyWithWhereWithoutProcessInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PetitionUncheckedUpdateManyWithoutProcessNestedInput = {
    create?: XOR<PetitionCreateWithoutProcessInput, PetitionUncheckedCreateWithoutProcessInput> | PetitionCreateWithoutProcessInput[] | PetitionUncheckedCreateWithoutProcessInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutProcessInput | PetitionCreateOrConnectWithoutProcessInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutProcessInput | PetitionUpsertWithWhereUniqueWithoutProcessInput[]
    createMany?: PetitionCreateManyProcessInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutProcessInput | PetitionUpdateWithWhereUniqueWithoutProcessInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutProcessInput | PetitionUpdateManyWithWhereWithoutProcessInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type ProcessCreateNestedManyWithoutLawyerInput = {
    create?: XOR<ProcessCreateWithoutLawyerInput, ProcessUncheckedCreateWithoutLawyerInput> | ProcessCreateWithoutLawyerInput[] | ProcessUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutLawyerInput | ProcessCreateOrConnectWithoutLawyerInput[]
    createMany?: ProcessCreateManyLawyerInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutLawyerInput = {
    create?: XOR<AppointmentCreateWithoutLawyerInput, AppointmentUncheckedCreateWithoutLawyerInput> | AppointmentCreateWithoutLawyerInput[] | AppointmentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLawyerInput | AppointmentCreateOrConnectWithoutLawyerInput[]
    createMany?: AppointmentCreateManyLawyerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PetitionCreateNestedManyWithoutLawyerInput = {
    create?: XOR<PetitionCreateWithoutLawyerInput, PetitionUncheckedCreateWithoutLawyerInput> | PetitionCreateWithoutLawyerInput[] | PetitionUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutLawyerInput | PetitionCreateOrConnectWithoutLawyerInput[]
    createMany?: PetitionCreateManyLawyerInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type ProcessUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<ProcessCreateWithoutLawyerInput, ProcessUncheckedCreateWithoutLawyerInput> | ProcessCreateWithoutLawyerInput[] | ProcessUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutLawyerInput | ProcessCreateOrConnectWithoutLawyerInput[]
    createMany?: ProcessCreateManyLawyerInputEnvelope
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<AppointmentCreateWithoutLawyerInput, AppointmentUncheckedCreateWithoutLawyerInput> | AppointmentCreateWithoutLawyerInput[] | AppointmentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLawyerInput | AppointmentCreateOrConnectWithoutLawyerInput[]
    createMany?: AppointmentCreateManyLawyerInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type PetitionUncheckedCreateNestedManyWithoutLawyerInput = {
    create?: XOR<PetitionCreateWithoutLawyerInput, PetitionUncheckedCreateWithoutLawyerInput> | PetitionCreateWithoutLawyerInput[] | PetitionUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutLawyerInput | PetitionCreateOrConnectWithoutLawyerInput[]
    createMany?: PetitionCreateManyLawyerInputEnvelope
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
  }

  export type ProcessUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<ProcessCreateWithoutLawyerInput, ProcessUncheckedCreateWithoutLawyerInput> | ProcessCreateWithoutLawyerInput[] | ProcessUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutLawyerInput | ProcessCreateOrConnectWithoutLawyerInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutLawyerInput | ProcessUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: ProcessCreateManyLawyerInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutLawyerInput | ProcessUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutLawyerInput | ProcessUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<AppointmentCreateWithoutLawyerInput, AppointmentUncheckedCreateWithoutLawyerInput> | AppointmentCreateWithoutLawyerInput[] | AppointmentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLawyerInput | AppointmentCreateOrConnectWithoutLawyerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutLawyerInput | AppointmentUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: AppointmentCreateManyLawyerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutLawyerInput | AppointmentUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutLawyerInput | AppointmentUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PetitionUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<PetitionCreateWithoutLawyerInput, PetitionUncheckedCreateWithoutLawyerInput> | PetitionCreateWithoutLawyerInput[] | PetitionUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutLawyerInput | PetitionCreateOrConnectWithoutLawyerInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutLawyerInput | PetitionUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: PetitionCreateManyLawyerInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutLawyerInput | PetitionUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutLawyerInput | PetitionUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type ProcessUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<ProcessCreateWithoutLawyerInput, ProcessUncheckedCreateWithoutLawyerInput> | ProcessCreateWithoutLawyerInput[] | ProcessUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: ProcessCreateOrConnectWithoutLawyerInput | ProcessCreateOrConnectWithoutLawyerInput[]
    upsert?: ProcessUpsertWithWhereUniqueWithoutLawyerInput | ProcessUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: ProcessCreateManyLawyerInputEnvelope
    set?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    disconnect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    delete?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    connect?: ProcessWhereUniqueInput | ProcessWhereUniqueInput[]
    update?: ProcessUpdateWithWhereUniqueWithoutLawyerInput | ProcessUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: ProcessUpdateManyWithWhereWithoutLawyerInput | ProcessUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<AppointmentCreateWithoutLawyerInput, AppointmentUncheckedCreateWithoutLawyerInput> | AppointmentCreateWithoutLawyerInput[] | AppointmentUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutLawyerInput | AppointmentCreateOrConnectWithoutLawyerInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutLawyerInput | AppointmentUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: AppointmentCreateManyLawyerInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutLawyerInput | AppointmentUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutLawyerInput | AppointmentUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type PetitionUncheckedUpdateManyWithoutLawyerNestedInput = {
    create?: XOR<PetitionCreateWithoutLawyerInput, PetitionUncheckedCreateWithoutLawyerInput> | PetitionCreateWithoutLawyerInput[] | PetitionUncheckedCreateWithoutLawyerInput[]
    connectOrCreate?: PetitionCreateOrConnectWithoutLawyerInput | PetitionCreateOrConnectWithoutLawyerInput[]
    upsert?: PetitionUpsertWithWhereUniqueWithoutLawyerInput | PetitionUpsertWithWhereUniqueWithoutLawyerInput[]
    createMany?: PetitionCreateManyLawyerInputEnvelope
    set?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    disconnect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    delete?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    connect?: PetitionWhereUniqueInput | PetitionWhereUniqueInput[]
    update?: PetitionUpdateWithWhereUniqueWithoutLawyerInput | PetitionUpdateWithWhereUniqueWithoutLawyerInput[]
    updateMany?: PetitionUpdateManyWithWhereWithoutLawyerInput | PetitionUpdateManyWithWhereWithoutLawyerInput[]
    deleteMany?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAppointmentsInput
    connect?: ClientWhereUniqueInput
  }

  export type LawyerCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<LawyerCreateWithoutAppointmentInput, LawyerUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutAppointmentInput
    connect?: LawyerWhereUniqueInput
  }

  export type ProcessCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<ProcessCreateWithoutAppointmentInput, ProcessUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutAppointmentInput
    connect?: ProcessWhereUniqueInput
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type ClientUpdateOneWithoutAppointmentsNestedInput = {
    create?: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAppointmentsInput
    upsert?: ClientUpsertWithoutAppointmentsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAppointmentsInput, ClientUpdateWithoutAppointmentsInput>, ClientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type LawyerUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<LawyerCreateWithoutAppointmentInput, LawyerUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutAppointmentInput
    upsert?: LawyerUpsertWithoutAppointmentInput
    disconnect?: LawyerWhereInput | boolean
    delete?: LawyerWhereInput | boolean
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutAppointmentInput, LawyerUpdateWithoutAppointmentInput>, LawyerUncheckedUpdateWithoutAppointmentInput>
  }

  export type ProcessUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<ProcessCreateWithoutAppointmentInput, ProcessUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutAppointmentInput
    upsert?: ProcessUpsertWithoutAppointmentInput
    disconnect?: ProcessWhereInput | boolean
    delete?: ProcessWhereInput | boolean
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutAppointmentInput, ProcessUpdateWithoutAppointmentInput>, ProcessUncheckedUpdateWithoutAppointmentInput>
  }

  export type ProcessCreateNestedOneWithoutPetitionsInput = {
    create?: XOR<ProcessCreateWithoutPetitionsInput, ProcessUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutPetitionsInput
    connect?: ProcessWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutPetitionsInput = {
    create?: XOR<ClientCreateWithoutPetitionsInput, ClientUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPetitionsInput
    connect?: ClientWhereUniqueInput
  }

  export type LawyerCreateNestedOneWithoutPetitionsInput = {
    create?: XOR<LawyerCreateWithoutPetitionsInput, LawyerUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutPetitionsInput
    connect?: LawyerWhereUniqueInput
  }

  export type EnumPetitionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PetitionType
  }

  export type EnumPetitionStatusFieldUpdateOperationsInput = {
    set?: $Enums.PetitionStatus
  }

  export type ProcessUpdateOneWithoutPetitionsNestedInput = {
    create?: XOR<ProcessCreateWithoutPetitionsInput, ProcessUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: ProcessCreateOrConnectWithoutPetitionsInput
    upsert?: ProcessUpsertWithoutPetitionsInput
    disconnect?: ProcessWhereInput | boolean
    delete?: ProcessWhereInput | boolean
    connect?: ProcessWhereUniqueInput
    update?: XOR<XOR<ProcessUpdateToOneWithWhereWithoutPetitionsInput, ProcessUpdateWithoutPetitionsInput>, ProcessUncheckedUpdateWithoutPetitionsInput>
  }

  export type ClientUpdateOneWithoutPetitionsNestedInput = {
    create?: XOR<ClientCreateWithoutPetitionsInput, ClientUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPetitionsInput
    upsert?: ClientUpsertWithoutPetitionsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPetitionsInput, ClientUpdateWithoutPetitionsInput>, ClientUncheckedUpdateWithoutPetitionsInput>
  }

  export type LawyerUpdateOneWithoutPetitionsNestedInput = {
    create?: XOR<LawyerCreateWithoutPetitionsInput, LawyerUncheckedCreateWithoutPetitionsInput>
    connectOrCreate?: LawyerCreateOrConnectWithoutPetitionsInput
    upsert?: LawyerUpsertWithoutPetitionsInput
    disconnect?: LawyerWhereInput | boolean
    delete?: LawyerWhereInput | boolean
    connect?: LawyerWhereUniqueInput
    update?: XOR<XOR<LawyerUpdateToOneWithWhereWithoutPetitionsInput, LawyerUpdateWithoutPetitionsInput>, LawyerUncheckedUpdateWithoutPetitionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPetitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionType | EnumPetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionTypeFilter<$PrismaModel> | $Enums.PetitionType
  }

  export type NestedEnumPetitionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusFilter<$PrismaModel> | $Enums.PetitionStatus
  }

  export type NestedEnumPetitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionType | EnumPetitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionType[] | ListEnumPetitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PetitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetitionTypeFilter<$PrismaModel>
    _max?: NestedEnumPetitionTypeFilter<$PrismaModel>
  }

  export type NestedEnumPetitionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PetitionStatus | EnumPetitionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PetitionStatus[] | ListEnumPetitionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPetitionStatusWithAggregatesFilter<$PrismaModel> | $Enums.PetitionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPetitionStatusFilter<$PrismaModel>
    _max?: NestedEnumPetitionStatusFilter<$PrismaModel>
  }

  export type AppointmentCreateWithoutClientInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lawyer?: LawyerCreateNestedOneWithoutAppointmentInput
    process?: ProcessCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    lawyerId?: string | null
    processId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentCreateManyClientInputEnvelope = {
    data: AppointmentCreateManyClientInput | AppointmentCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ProcessCreateWithoutClientInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawyer?: LawyerCreateNestedOneWithoutProcessesInput
    appointment?: AppointmentCreateNestedManyWithoutProcessInput
    petitions?: PetitionCreateNestedManyWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutClientInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    lawyerId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedManyWithoutProcessInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutClientInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutClientInput, ProcessUncheckedCreateWithoutClientInput>
  }

  export type ProcessCreateManyClientInputEnvelope = {
    data: ProcessCreateManyClientInput | ProcessCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type PetitionCreateWithoutClientInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    process?: ProcessCreateNestedOneWithoutPetitionsInput
    lawyer?: LawyerCreateNestedOneWithoutPetitionsInput
  }

  export type PetitionUncheckedCreateWithoutClientInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    processId?: string | null
    lawyerId?: string | null
  }

  export type PetitionCreateOrConnectWithoutClientInput = {
    where: PetitionWhereUniqueInput
    create: XOR<PetitionCreateWithoutClientInput, PetitionUncheckedCreateWithoutClientInput>
  }

  export type PetitionCreateManyClientInputEnvelope = {
    data: PetitionCreateManyClientInput | PetitionCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentUpsertWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
    create: XOR<AppointmentCreateWithoutClientInput, AppointmentUncheckedCreateWithoutClientInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutClientInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutClientInput, AppointmentUncheckedUpdateWithoutClientInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutClientInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutClientInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    title?: StringFilter<"Appointment"> | string
    description?: StringNullableFilter<"Appointment"> | string | null
    date?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    eventType?: StringNullableFilter<"Appointment"> | string | null
    location?: StringNullableFilter<"Appointment"> | string | null
    clientId?: StringNullableFilter<"Appointment"> | string | null
    lawyerId?: StringNullableFilter<"Appointment"> | string | null
    processId?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type ProcessUpsertWithWhereUniqueWithoutClientInput = {
    where: ProcessWhereUniqueInput
    update: XOR<ProcessUpdateWithoutClientInput, ProcessUncheckedUpdateWithoutClientInput>
    create: XOR<ProcessCreateWithoutClientInput, ProcessUncheckedCreateWithoutClientInput>
  }

  export type ProcessUpdateWithWhereUniqueWithoutClientInput = {
    where: ProcessWhereUniqueInput
    data: XOR<ProcessUpdateWithoutClientInput, ProcessUncheckedUpdateWithoutClientInput>
  }

  export type ProcessUpdateManyWithWhereWithoutClientInput = {
    where: ProcessScalarWhereInput
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyWithoutClientInput>
  }

  export type ProcessScalarWhereInput = {
    AND?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
    OR?: ProcessScalarWhereInput[]
    NOT?: ProcessScalarWhereInput | ProcessScalarWhereInput[]
    id?: StringFilter<"Process"> | string
    processNumber?: StringFilter<"Process"> | string
    court?: StringFilter<"Process"> | string
    type?: StringFilter<"Process"> | string
    status?: StringFilter<"Process"> | string
    lawyerId?: StringNullableFilter<"Process"> | string | null
    clientId?: StringNullableFilter<"Process"> | string | null
    hearingDate?: DateTimeFilter<"Process"> | Date | string
    caseValue?: DecimalFilter<"Process"> | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFilter<"Process"> | string
    createdAt?: DateTimeFilter<"Process"> | Date | string
    updatedAt?: DateTimeFilter<"Process"> | Date | string
  }

  export type PetitionUpsertWithWhereUniqueWithoutClientInput = {
    where: PetitionWhereUniqueInput
    update: XOR<PetitionUpdateWithoutClientInput, PetitionUncheckedUpdateWithoutClientInput>
    create: XOR<PetitionCreateWithoutClientInput, PetitionUncheckedCreateWithoutClientInput>
  }

  export type PetitionUpdateWithWhereUniqueWithoutClientInput = {
    where: PetitionWhereUniqueInput
    data: XOR<PetitionUpdateWithoutClientInput, PetitionUncheckedUpdateWithoutClientInput>
  }

  export type PetitionUpdateManyWithWhereWithoutClientInput = {
    where: PetitionScalarWhereInput
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyWithoutClientInput>
  }

  export type PetitionScalarWhereInput = {
    AND?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
    OR?: PetitionScalarWhereInput[]
    NOT?: PetitionScalarWhereInput | PetitionScalarWhereInput[]
    id?: StringFilter<"Petition"> | string
    title?: StringFilter<"Petition"> | string
    description?: StringNullableFilter<"Petition"> | string | null
    type?: EnumPetitionTypeFilter<"Petition"> | $Enums.PetitionType
    status?: EnumPetitionStatusFilter<"Petition"> | $Enums.PetitionStatus
    factsSummary?: StringNullableFilter<"Petition"> | string | null
    fileUrl?: StringNullableFilter<"Petition"> | string | null
    protocolNumber?: StringNullableFilter<"Petition"> | string | null
    processId?: StringNullableFilter<"Petition"> | string | null
    clientId?: StringNullableFilter<"Petition"> | string | null
    lawyerId?: StringNullableFilter<"Petition"> | string | null
  }

  export type LawyerCreateWithoutProcessesInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentCreateNestedManyWithoutLawyerInput
    petitions?: PetitionCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutProcessesInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLawyerInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutProcessesInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutProcessesInput, LawyerUncheckedCreateWithoutProcessesInput>
  }

  export type ClientCreateWithoutProcessesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    petitions?: PetitionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutProcessesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutProcessesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutProcessesInput, ClientUncheckedCreateWithoutProcessesInput>
  }

  export type AppointmentCreateWithoutProcessInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutAppointmentsInput
    lawyer?: LawyerCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutProcessInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    clientId?: string | null
    lawyerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutProcessInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutProcessInput, AppointmentUncheckedCreateWithoutProcessInput>
  }

  export type AppointmentCreateManyProcessInputEnvelope = {
    data: AppointmentCreateManyProcessInput | AppointmentCreateManyProcessInput[]
    skipDuplicates?: boolean
  }

  export type PetitionCreateWithoutProcessInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    client?: ClientCreateNestedOneWithoutPetitionsInput
    lawyer?: LawyerCreateNestedOneWithoutPetitionsInput
  }

  export type PetitionUncheckedCreateWithoutProcessInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    clientId?: string | null
    lawyerId?: string | null
  }

  export type PetitionCreateOrConnectWithoutProcessInput = {
    where: PetitionWhereUniqueInput
    create: XOR<PetitionCreateWithoutProcessInput, PetitionUncheckedCreateWithoutProcessInput>
  }

  export type PetitionCreateManyProcessInputEnvelope = {
    data: PetitionCreateManyProcessInput | PetitionCreateManyProcessInput[]
    skipDuplicates?: boolean
  }

  export type LawyerUpsertWithoutProcessesInput = {
    update: XOR<LawyerUpdateWithoutProcessesInput, LawyerUncheckedUpdateWithoutProcessesInput>
    create: XOR<LawyerCreateWithoutProcessesInput, LawyerUncheckedCreateWithoutProcessesInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutProcessesInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutProcessesInput, LawyerUncheckedUpdateWithoutProcessesInput>
  }

  export type LawyerUpdateWithoutProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateManyWithoutLawyerNestedInput
    petitions?: PetitionUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateManyWithoutLawyerNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type ClientUpsertWithoutProcessesInput = {
    update: XOR<ClientUpdateWithoutProcessesInput, ClientUncheckedUpdateWithoutProcessesInput>
    create: XOR<ClientCreateWithoutProcessesInput, ClientUncheckedCreateWithoutProcessesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutProcessesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutProcessesInput, ClientUncheckedUpdateWithoutProcessesInput>
  }

  export type ClientUpdateWithoutProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    petitions?: PetitionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutProcessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type AppointmentUpsertWithWhereUniqueWithoutProcessInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutProcessInput, AppointmentUncheckedUpdateWithoutProcessInput>
    create: XOR<AppointmentCreateWithoutProcessInput, AppointmentUncheckedCreateWithoutProcessInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutProcessInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutProcessInput, AppointmentUncheckedUpdateWithoutProcessInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutProcessInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutProcessInput>
  }

  export type PetitionUpsertWithWhereUniqueWithoutProcessInput = {
    where: PetitionWhereUniqueInput
    update: XOR<PetitionUpdateWithoutProcessInput, PetitionUncheckedUpdateWithoutProcessInput>
    create: XOR<PetitionCreateWithoutProcessInput, PetitionUncheckedCreateWithoutProcessInput>
  }

  export type PetitionUpdateWithWhereUniqueWithoutProcessInput = {
    where: PetitionWhereUniqueInput
    data: XOR<PetitionUpdateWithoutProcessInput, PetitionUncheckedUpdateWithoutProcessInput>
  }

  export type PetitionUpdateManyWithWhereWithoutProcessInput = {
    where: PetitionScalarWhereInput
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyWithoutProcessInput>
  }

  export type ProcessCreateWithoutLawyerInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutProcessesInput
    appointment?: AppointmentCreateNestedManyWithoutProcessInput
    petitions?: PetitionCreateNestedManyWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutLawyerInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    clientId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedManyWithoutProcessInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutLawyerInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutLawyerInput, ProcessUncheckedCreateWithoutLawyerInput>
  }

  export type ProcessCreateManyLawyerInputEnvelope = {
    data: ProcessCreateManyLawyerInput | ProcessCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutLawyerInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutAppointmentsInput
    process?: ProcessCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutLawyerInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    clientId?: string | null
    processId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutLawyerInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutLawyerInput, AppointmentUncheckedCreateWithoutLawyerInput>
  }

  export type AppointmentCreateManyLawyerInputEnvelope = {
    data: AppointmentCreateManyLawyerInput | AppointmentCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type PetitionCreateWithoutLawyerInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    process?: ProcessCreateNestedOneWithoutPetitionsInput
    client?: ClientCreateNestedOneWithoutPetitionsInput
  }

  export type PetitionUncheckedCreateWithoutLawyerInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    processId?: string | null
    clientId?: string | null
  }

  export type PetitionCreateOrConnectWithoutLawyerInput = {
    where: PetitionWhereUniqueInput
    create: XOR<PetitionCreateWithoutLawyerInput, PetitionUncheckedCreateWithoutLawyerInput>
  }

  export type PetitionCreateManyLawyerInputEnvelope = {
    data: PetitionCreateManyLawyerInput | PetitionCreateManyLawyerInput[]
    skipDuplicates?: boolean
  }

  export type ProcessUpsertWithWhereUniqueWithoutLawyerInput = {
    where: ProcessWhereUniqueInput
    update: XOR<ProcessUpdateWithoutLawyerInput, ProcessUncheckedUpdateWithoutLawyerInput>
    create: XOR<ProcessCreateWithoutLawyerInput, ProcessUncheckedCreateWithoutLawyerInput>
  }

  export type ProcessUpdateWithWhereUniqueWithoutLawyerInput = {
    where: ProcessWhereUniqueInput
    data: XOR<ProcessUpdateWithoutLawyerInput, ProcessUncheckedUpdateWithoutLawyerInput>
  }

  export type ProcessUpdateManyWithWhereWithoutLawyerInput = {
    where: ProcessScalarWhereInput
    data: XOR<ProcessUpdateManyMutationInput, ProcessUncheckedUpdateManyWithoutLawyerInput>
  }

  export type AppointmentUpsertWithWhereUniqueWithoutLawyerInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutLawyerInput, AppointmentUncheckedUpdateWithoutLawyerInput>
    create: XOR<AppointmentCreateWithoutLawyerInput, AppointmentUncheckedCreateWithoutLawyerInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutLawyerInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutLawyerInput, AppointmentUncheckedUpdateWithoutLawyerInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutLawyerInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutLawyerInput>
  }

  export type PetitionUpsertWithWhereUniqueWithoutLawyerInput = {
    where: PetitionWhereUniqueInput
    update: XOR<PetitionUpdateWithoutLawyerInput, PetitionUncheckedUpdateWithoutLawyerInput>
    create: XOR<PetitionCreateWithoutLawyerInput, PetitionUncheckedCreateWithoutLawyerInput>
  }

  export type PetitionUpdateWithWhereUniqueWithoutLawyerInput = {
    where: PetitionWhereUniqueInput
    data: XOR<PetitionUpdateWithoutLawyerInput, PetitionUncheckedUpdateWithoutLawyerInput>
  }

  export type PetitionUpdateManyWithWhereWithoutLawyerInput = {
    where: PetitionScalarWhereInput
    data: XOR<PetitionUpdateManyMutationInput, PetitionUncheckedUpdateManyWithoutLawyerInput>
  }

  export type ClientCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessCreateNestedManyWithoutClientInput
    petitions?: PetitionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAppointmentsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessUncheckedCreateNestedManyWithoutClientInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAppointmentsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
  }

  export type LawyerCreateWithoutAppointmentInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessCreateNestedManyWithoutLawyerInput
    petitions?: PetitionCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutAppointmentInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessUncheckedCreateNestedManyWithoutLawyerInput
    petitions?: PetitionUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutAppointmentInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutAppointmentInput, LawyerUncheckedCreateWithoutAppointmentInput>
  }

  export type ProcessCreateWithoutAppointmentInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawyer?: LawyerCreateNestedOneWithoutProcessesInput
    client?: ClientCreateNestedOneWithoutProcessesInput
    petitions?: PetitionCreateNestedManyWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutAppointmentInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    lawyerId?: string | null
    clientId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    petitions?: PetitionUncheckedCreateNestedManyWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutAppointmentInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutAppointmentInput, ProcessUncheckedCreateWithoutAppointmentInput>
  }

  export type ClientUpsertWithoutAppointmentsInput = {
    update: XOR<ClientUpdateWithoutAppointmentsInput, ClientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<ClientCreateWithoutAppointmentsInput, ClientUncheckedCreateWithoutAppointmentsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAppointmentsInput, ClientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type ClientUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUpdateManyWithoutClientNestedInput
    petitions?: PetitionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUncheckedUpdateManyWithoutClientNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type LawyerUpsertWithoutAppointmentInput = {
    update: XOR<LawyerUpdateWithoutAppointmentInput, LawyerUncheckedUpdateWithoutAppointmentInput>
    create: XOR<LawyerCreateWithoutAppointmentInput, LawyerUncheckedCreateWithoutAppointmentInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutAppointmentInput, LawyerUncheckedUpdateWithoutAppointmentInput>
  }

  export type LawyerUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUpdateManyWithoutLawyerNestedInput
    petitions?: PetitionUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUncheckedUpdateManyWithoutLawyerNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type ProcessUpsertWithoutAppointmentInput = {
    update: XOR<ProcessUpdateWithoutAppointmentInput, ProcessUncheckedUpdateWithoutAppointmentInput>
    create: XOR<ProcessCreateWithoutAppointmentInput, ProcessUncheckedCreateWithoutAppointmentInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutAppointmentInput, ProcessUncheckedUpdateWithoutAppointmentInput>
  }

  export type ProcessUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer?: LawyerUpdateOneWithoutProcessesNestedInput
    client?: ClientUpdateOneWithoutProcessesNestedInput
    petitions?: PetitionUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    petitions?: PetitionUncheckedUpdateManyWithoutProcessNestedInput
  }

  export type ProcessCreateWithoutPetitionsInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lawyer?: LawyerCreateNestedOneWithoutProcessesInput
    client?: ClientCreateNestedOneWithoutProcessesInput
    appointment?: AppointmentCreateNestedManyWithoutProcessInput
  }

  export type ProcessUncheckedCreateWithoutPetitionsInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    lawyerId?: string | null
    clientId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment?: AppointmentUncheckedCreateNestedManyWithoutProcessInput
  }

  export type ProcessCreateOrConnectWithoutPetitionsInput = {
    where: ProcessWhereUniqueInput
    create: XOR<ProcessCreateWithoutPetitionsInput, ProcessUncheckedCreateWithoutPetitionsInput>
  }

  export type ClientCreateWithoutPetitionsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentCreateNestedManyWithoutClientInput
    processes?: ProcessCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPetitionsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    cpf?: string | null
    cnpj?: string | null
    cpf_cnpj?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    notes?: string | null
    dateOfBirth?: Date | string | null
    maritalStatus?: string | null
    profession?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: AppointmentUncheckedCreateNestedManyWithoutClientInput
    processes?: ProcessUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPetitionsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPetitionsInput, ClientUncheckedCreateWithoutPetitionsInput>
  }

  export type LawyerCreateWithoutPetitionsInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessCreateNestedManyWithoutLawyerInput
    appointment?: AppointmentCreateNestedManyWithoutLawyerInput
  }

  export type LawyerUncheckedCreateWithoutPetitionsInput = {
    id?: string
    name: string
    email: string
    oabNumber: string
    specialty: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processes?: ProcessUncheckedCreateNestedManyWithoutLawyerInput
    appointment?: AppointmentUncheckedCreateNestedManyWithoutLawyerInput
  }

  export type LawyerCreateOrConnectWithoutPetitionsInput = {
    where: LawyerWhereUniqueInput
    create: XOR<LawyerCreateWithoutPetitionsInput, LawyerUncheckedCreateWithoutPetitionsInput>
  }

  export type ProcessUpsertWithoutPetitionsInput = {
    update: XOR<ProcessUpdateWithoutPetitionsInput, ProcessUncheckedUpdateWithoutPetitionsInput>
    create: XOR<ProcessCreateWithoutPetitionsInput, ProcessUncheckedCreateWithoutPetitionsInput>
    where?: ProcessWhereInput
  }

  export type ProcessUpdateToOneWithWhereWithoutPetitionsInput = {
    where?: ProcessWhereInput
    data: XOR<ProcessUpdateWithoutPetitionsInput, ProcessUncheckedUpdateWithoutPetitionsInput>
  }

  export type ProcessUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer?: LawyerUpdateOneWithoutProcessesNestedInput
    client?: ClientUpdateOneWithoutProcessesNestedInput
    appointment?: AppointmentUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateManyWithoutProcessNestedInput
  }

  export type ClientUpsertWithoutPetitionsInput = {
    update: XOR<ClientUpdateWithoutPetitionsInput, ClientUncheckedUpdateWithoutPetitionsInput>
    create: XOR<ClientCreateWithoutPetitionsInput, ClientUncheckedCreateWithoutPetitionsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPetitionsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPetitionsInput, ClientUncheckedUpdateWithoutPetitionsInput>
  }

  export type ClientUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUpdateManyWithoutClientNestedInput
    processes?: ProcessUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    cpf_cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maritalStatus?: NullableStringFieldUpdateOperationsInput | string | null
    profession?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: AppointmentUncheckedUpdateManyWithoutClientNestedInput
    processes?: ProcessUncheckedUpdateManyWithoutClientNestedInput
  }

  export type LawyerUpsertWithoutPetitionsInput = {
    update: XOR<LawyerUpdateWithoutPetitionsInput, LawyerUncheckedUpdateWithoutPetitionsInput>
    create: XOR<LawyerCreateWithoutPetitionsInput, LawyerUncheckedCreateWithoutPetitionsInput>
    where?: LawyerWhereInput
  }

  export type LawyerUpdateToOneWithWhereWithoutPetitionsInput = {
    where?: LawyerWhereInput
    data: XOR<LawyerUpdateWithoutPetitionsInput, LawyerUncheckedUpdateWithoutPetitionsInput>
  }

  export type LawyerUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUpdateManyWithoutLawyerNestedInput
    appointment?: AppointmentUpdateManyWithoutLawyerNestedInput
  }

  export type LawyerUncheckedUpdateWithoutPetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    oabNumber?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processes?: ProcessUncheckedUpdateManyWithoutLawyerNestedInput
    appointment?: AppointmentUncheckedUpdateManyWithoutLawyerNestedInput
  }

  export type AppointmentCreateManyClientInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    lawyerId?: string | null
    processId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessCreateManyClientInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    lawyerId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionCreateManyClientInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    processId?: string | null
    lawyerId?: string | null
  }

  export type AppointmentUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer?: LawyerUpdateOneWithoutAppointmentNestedInput
    process?: ProcessUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lawyer?: LawyerUpdateOneWithoutProcessesNestedInput
    appointment?: AppointmentUpdateManyWithoutProcessNestedInput
    petitions?: PetitionUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateManyWithoutProcessNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneWithoutPetitionsNestedInput
    lawyer?: LawyerUpdateOneWithoutPetitionsNestedInput
  }

  export type PetitionUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetitionUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppointmentCreateManyProcessInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    clientId?: string | null
    lawyerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionCreateManyProcessInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    clientId?: string | null
    lawyerId?: string | null
  }

  export type AppointmentUpdateWithoutProcessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutAppointmentsNestedInput
    lawyer?: LawyerUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutProcessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutProcessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionUpdateWithoutProcessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneWithoutPetitionsNestedInput
    lawyer?: LawyerUpdateOneWithoutPetitionsNestedInput
  }

  export type PetitionUncheckedUpdateWithoutProcessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetitionUncheckedUpdateManyWithoutProcessInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    lawyerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcessCreateManyLawyerInput = {
    id?: string
    processNumber: string
    court: string
    type: string
    status?: string
    clientId?: string | null
    hearingDate: Date | string
    caseValue: Decimal | DecimalJsLike | number | string
    internalNotes: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentCreateManyLawyerInput = {
    id?: string
    title: string
    description?: string | null
    date: Date | string
    status?: $Enums.AppointmentStatus
    eventType?: string | null
    location?: string | null
    clientId?: string | null
    processId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PetitionCreateManyLawyerInput = {
    id?: string
    title: string
    description?: string | null
    type: $Enums.PetitionType
    status?: $Enums.PetitionStatus
    factsSummary?: string | null
    fileUrl?: string | null
    protocolNumber?: string | null
    processId?: string | null
    clientId?: string | null
  }

  export type ProcessUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutProcessesNestedInput
    appointment?: AppointmentUpdateManyWithoutProcessNestedInput
    petitions?: PetitionUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUncheckedUpdateManyWithoutProcessNestedInput
    petitions?: PetitionUncheckedUpdateManyWithoutProcessNestedInput
  }

  export type ProcessUncheckedUpdateManyWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    processNumber?: StringFieldUpdateOperationsInput | string
    court?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    hearingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    caseValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    internalNotes?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutAppointmentsNestedInput
    process?: ProcessUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    eventType?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PetitionUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    process?: ProcessUpdateOneWithoutPetitionsNestedInput
    client?: ClientUpdateOneWithoutPetitionsNestedInput
  }

  export type PetitionUncheckedUpdateWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PetitionUncheckedUpdateManyWithoutLawyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumPetitionTypeFieldUpdateOperationsInput | $Enums.PetitionType
    status?: EnumPetitionStatusFieldUpdateOperationsInput | $Enums.PetitionStatus
    factsSummary?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    protocolNumber?: NullableStringFieldUpdateOperationsInput | string | null
    processId?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
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