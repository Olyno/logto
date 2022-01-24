import { z } from 'zod';

export const oidcModelInstancePayloadGuard = z
  .object({
    userCode: z.string().optional(),
    uid: z.string().optional(),
    grantId: z.string().optional(),
  })
  /**
   * Try to use `.passthrough()` if type has been fixed.
   * https://github.com/colinhacks/zod/issues/452
   */
  .catchall(z.unknown());

export type OidcModelInstancePayload = z.infer<typeof oidcModelInstancePayloadGuard>;

export const oidcClientMetadataGuard = z.object({
  redirectUris: z.string().array(),
  postLogoutRedirectUris: z.string().array(),
  logoUri: z.string().optional(),
});

export type OidcClientMetadata = z.infer<typeof oidcClientMetadataGuard>;

export enum CustomClientMetadataType {
  idTokenTtl = 'idTokenTtl',
  refreshTokenTtl = 'refreshTokenTtl',
}

export const customClientMetadataGuard = z.object({
  [CustomClientMetadataType.idTokenTtl]: z.number().optional(),
  [CustomClientMetadataType.refreshTokenTtl]: z.number().optional(),
});

export type CustomClientMetadata = z.infer<typeof customClientMetadataGuard>;

export const userLogPayloadGuard = z.object({
  ip: z.string().optional(),
  userAgent: z.string().optional(),
  applicationId: z.string().optional(),
  applicationName: z.string().optional(),
  details: z.object({}).optional(), // NOT intend to be parsed
});

export type UserLogPayload = z.infer<typeof userLogPayloadGuard>;

// TODO: support empty shape of object
export const connectorConfigGuard = z.object({}).catchall(z.unknown());

export type ConnectorConfig = z.infer<typeof connectorConfigGuard>;

export const adminConsoleConfigGuard = z.object({
  applicationSkipGetStarted: z.boolean(),
});

export type AdminConsoleConfig = z.infer<typeof adminConsoleConfigGuard>;
