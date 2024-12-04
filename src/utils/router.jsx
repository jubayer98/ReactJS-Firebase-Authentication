import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import StartLearning from "../pages/StartLearning";
import Tutorials from "../pages/Tutorials";
import AboutUs from "../pages/AboutUs";
import Lessons from "../components/Lessons";
import LessonDetails from "../components/LessonDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import RedirectIfLoggedIn from "../components/RedirectIfLoggedIn";
import Error from "../pages/Error";
import PageTitle from "../components/PageTitle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <PageTitle title="Home">
                    <Home></Home>
                </PageTitle>
            },
            {
                path: "/start-learning",
                element: <PageTitle title="Start Learning">
                    <StartLearning></StartLearning>
                </PageTitle>,
                loader: () => fetch("../languages.json")
            },
            {
                path: "/start-learning/:languageName",
                element: <PrivateRoute>
                    <PageTitle title="Lessons">
                        <Lessons></Lessons>
                    </PageTitle>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    const response = await fetch("../lessons.json");
                    const lessons = await response.json();
                    return lessons.filter(
                        (lesson) => lesson.language_name === params.languageName
                    );
                }
            },
            {
                path: "/start-learning/:languageName/:lessonID",
                element: <PrivateRoute>
                    <PageTitle title="Lesson Detail">
                        <LessonDetails></LessonDetails>
                    </PageTitle>
                </PrivateRoute>,
                loader: async ({ params }) => {
                    try {
                        const response = await fetch("../lessons.json");
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const data = await response.json();
                        return data.find(singleLesson => singleLesson.id === params.lessonID);
                    } catch (error) {
                        console.error("Failed to load lesson data:", error);
                        return null; // Return null or a default object to handle this more gracefully
                    }
                }
            },
            {
                path: "/tutorials",
                element: <PrivateRoute>
                    <PageTitle title="Tutorials">
                        <Tutorials></Tutorials>
                    </PageTitle>
                </PrivateRoute>,
                loader: () => fetch("../videos.json")
            },
            {
                path: "/about-us",
                element: <PageTitle title="About Us">
                    <AboutUs></AboutUs>
                </PageTitle>
            },
            {
                path: "/login",
                element: (
                    <RedirectIfLoggedIn>
                        <PageTitle title="Login">
                            <Login></Login>
                        </PageTitle>
                    </RedirectIfLoggedIn>
                ),
            },
            {
                path: "/register",
                element: <PageTitle title="Register">
                    <Register></Register>
                </PageTitle>
            },
            {
                path: "/profile",
                element: <PageTitle title="Profile">
                    <Profile></Profile>
                </PageTitle>
            },
            {
                path: "/forget-password",
                element: <PageTitle title="Forget Password">
                    <ForgetPassword></ForgetPassword>
                </PageTitle>
            },
            {
                path: "/update-profile",
                element: <PageTitle title="Update Profile">
                    <UpdateProfile></UpdateProfile>
                </PageTitle>
            },
            {
                path: "*",
                element: <PageTitle title="Error">
                    <Error></Error>
                </PageTitle>
            }
        ]
    }
])

export default router;