import { Router } from 'express';
import schema from './graphql/schema';
import { queryRoutes } from './graphql/queries';
import { mutationRoutes } from './graphql/mutations';

const router = Router();

router.get('/', (req, res) => res.json({ message: "GraphQL Babel"}));

queryRoutes(router, schema);
mutationRoutes(router, schema);

export default router;
