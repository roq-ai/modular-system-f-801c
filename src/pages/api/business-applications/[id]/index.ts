import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { businessApplicationValidationSchema } from 'validationSchema/business-applications';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.business_application
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getBusinessApplicationById();
    case 'PUT':
      return updateBusinessApplicationById();
    case 'DELETE':
      return deleteBusinessApplicationById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBusinessApplicationById() {
    const data = await prisma.business_application.findFirst(
      convertQueryToPrismaUtil(req.query, 'business_application'),
    );
    return res.status(200).json(data);
  }

  async function updateBusinessApplicationById() {
    await businessApplicationValidationSchema.validate(req.body);
    const data = await prisma.business_application.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteBusinessApplicationById() {
    const data = await prisma.business_application.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
