const _env = <T>(type: string | number | boolean, key: keyof TEnv): T => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`'${key}' is not found in .env file`);
    }
    if (type === "string") {
        return value as T;
    }
    if (type === "number") {
        return Number(value) as T;
    }
    if (type === "boolean") {
        return (value.toLowerCase() === "true") as T;
    }
    throw new Error(`Unsupported type for environment variable '${key}'`);
};

type TEnv = {
    NODEMAILER_SERVICE: string;
    NODEMAILER_HOST: string;
    NODEMAILER_PORT: number;
    NODEMAILER_SECURE: boolean;
    NODEMAILER_USER: string;
    NODEMAILER_PASS: string;
    SHOW_DRAFT_CONTENT: boolean;
};

const env: TEnv = {
    NODEMAILER_SERVICE: _env("string", "NODEMAILER_SERVICE"),
    NODEMAILER_HOST: _env("string", "NODEMAILER_HOST"),
    NODEMAILER_PORT: _env("number", "NODEMAILER_PORT"),
    NODEMAILER_SECURE: _env("boolean", "NODEMAILER_SECURE"),
    NODEMAILER_USER: _env("string", "NODEMAILER_USER"),
    NODEMAILER_PASS: _env("string", "NODEMAILER_PASS"),
    SHOW_DRAFT_CONTENT: _env("boolean", "SHOW_DRAFT_CONTENT"),
};

export default env;
