"use strict";
exports.__esModule = true;
exports.prisma = void 0;
var client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
// async function main() {
//     await prisma.user.create({
//         data: {
//           name: 'Alice',
//           email: 'alice@prisma.io',
//           posts: {
//             create: { title: 'Hello World' },
//           },
//           profile: {
//             create: { bio: 'I like turtles' },
//           },
//         },
//       })
//     const allUsers = await prisma.user.findMany({
//     include: {
//         posts: true,
//         profile: true,
//     },
//     })
//     console.dir(allUsers, { depth: null })
// }
//
// main().catch(e => {
//     throw e
// }).finally(async () => {
//     await prisma.$disconnect()
// })
//# sourceMappingURL=index.js.map