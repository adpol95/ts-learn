// Создайте тип Config с необязательными полями host: string и port: number. Создайте объект myConfig с использованием satisfies, где вы точно укажете port: 8080.
// Проверьте, что вы можете вызвать myConfig.port.toFixed(), не используя проверку на undefined.

type Config = {
  host?: string;
  port?: number;
};

const myConfig = {
  port: 8080,
} satisfies Config;

console.log(myConfig.port.toFixed());
