# AWS-GPU-Tower

This is a server for controlling the capacity of GPU instance of EC2. Note that it's designed for adjusting the numbers of EC2 instance with GPU (G family instance such as g4dn).

This server is supposed to run in ECS cluster and adjust ASG settings dynamically.

It's recommended to use tools like [aws-vault](https://github.com/99designs/aws-vault) for seamlessly creating credentials imitating ECS environmnent.

## Usage

For development:

```bash
pnpm dev
```

For production:

```bash
pnpm build
node dist/index.js
```

If you use aws-vault and you're in development environment, run this before above commands:

```bash
aws-vault exec <PROFIE> --ecs-server
```

## License

This project is under MIT license.
