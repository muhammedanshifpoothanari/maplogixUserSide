// import { NextApiRequest, NextApiResponse } from 'next';
// import { getServerSession } from "next-auth/next"
// import { authOptions } from "./page"
// import { useRouter } from 'next/router';
// const handler =  async (req:NextApiRequest, res:NextApiResponse) => {
//   const session = await getServerSession(req, res, authOptions)
//  // eslint-disable-next-line react-hooks/rules-of-hooks
//  const router = useRouter();
//   if (session) {
//     res.send({
//       content:
//         "This is protected content. You can access this content because you are signed in.",
//     })
//     console.log('hihihi-------------------------------')
    

//   } else {
//     res.send({
//       error: "You must be signed in to view the protected content on this page.",
//     })
//     router.push('/')
//     console.log('hihihi---------biibibbibibibii----------------------')

//   }
// }

// export default handler;