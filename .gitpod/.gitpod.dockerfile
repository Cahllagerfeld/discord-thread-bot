FROM gitpod/workspace-full

RUN npm i -g pnpm
RUN pnpm i -g @nestjs/cli
