export type Method = 'POST' | 'PUT';

export type GenericObject = {
  [key: string]: any;
};

export type MutationFunction = (
  payload: GenericObject,
  url: string,
  method: Method,
  token?: string,
) => Promise<any>;

export type DeleteFunction = (url: string, token?: string) => Promise<any>;

export type GetListFunction = (
  url: string,
  token?: string,
) => Promise<GenericObject[]>;

export type QueryFunction = (
  url: string,
  token?: string,
) => Promise<GenericObject>;
