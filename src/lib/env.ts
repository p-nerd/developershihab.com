const _env = <T>(type: string | number | boolean, key: keyof TEnv): T => {
    const value = import.meta.env[key];

    if (!value) {
        throw new Error(`'${key}' is not found in .env file`);
    }
    switch (type) {
        case "string":
            return value as T;
        case "number":
            return Number(value) as T;
        case "boolean":
            return (value.toLowerCase() === "true") as T;
        default:
            throw new Error(`Unsupported type for environment variable '${key}'`);
    }
};

type TEnv = {
    SMTP_SERVICE: string;
    SMTP_HOST: string;
    SMTP_PORT: number;
    SMTP_SECURE: boolean;
    SMTP_USER: string;
    SMTP_PASS: string;
};

const env: TEnv = {
    SMTP_SERVICE: _env("string", "SMTP_SERVICE"),
    SMTP_HOST: _env("string", "SMTP_HOST"),
    SMTP_PORT: _env("number", "SMTP_PORT"),
    SMTP_SECURE: _env("boolean", "SMTP_SECURE"),
    SMTP_USER: _env("string", "SMTP_USER"),
    SMTP_PASS: _env("string", "SMTP_PASS"),
};

export default env;
