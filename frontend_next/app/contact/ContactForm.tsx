"use client";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    const [isSubmitting, setIsSubmitting] = useState(false);

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true);
        console.log(data);

        const payload = {
            ...data,
            access_key: "2a8e1d7e-2345-488e-8a67-7d9ccb8a0653",
        };

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const json = await res.json();

            if (json.success) {
                toast.success("Message sent successfully!");
                reset();
            } else {
                toast.error(json.message || "Submission failed.");
            }
        } catch (err) {
            toast.error("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <ToastContainer position="top-right" />

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-8 rounded-2xl shadow-lg space-y-5"
            >
                <h3 className="text-2xl  text-center fugaz font-semibold mb-6 text-primary">
                    Send a Message
                </h3>
                <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your name"
                    className="w-full border rounded-lg px-4 py-3"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
                    })}
                    placeholder="Your email"
                    className="w-full border rounded-lg px-4 py-3"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <textarea
                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "The message must be atleast 10 characters!" } })}
                    placeholder="Your message"
                    rows={5}
                    className="w-full border rounded-lg px-4 py-3"
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

                <button
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </>
    );
}
