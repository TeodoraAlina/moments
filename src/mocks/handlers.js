import { rest } from "msw"

const baseURL = "https://drf-api-project1-142269573d7b.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 2,
            username: "alexandra",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 2,
            profile_image: "https://res.cloudinary.com/dxajyjfpw/image/upload/v1/media/images/IMG_3938_as8wgj"
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200)); 
    })
]