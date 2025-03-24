"use strict";

interface IUser {
    userId?: number;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    gender: string;
}

interface IFetchOptions {
    method: string;
    headers: Record<string, string>;
    body?: string;
}

export class UserLogic {
    private baseURL: string;

    constructor() {
        this.baseURL = "https://dummyjson.com/users";
    }

    private async fetchData<T>(url: string, options: RequestInit = {}): Promise<T> {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return await response.json() as T;
        } catch (error) {
            console.error("Error during fetch:", error);
            throw error;
        }
    }

    async addUser(userData: IUser): Promise<IUser> {
        const url = `${this.baseURL}/add`;
        const options: IFetchOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        };
        return await this.fetchData<IUser>(url, options);
    }

    async updateUser(userId: number, updatedData: Partial<IUser>): Promise<IUser> {
        const url = `${this.baseURL}/${userId}`;
        const options: IFetchOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        };
        return await this.fetchData<IUser>(url, options);
    }
}

class UserUI {
    collectFormData(form: HTMLFormElement): IUser {
        const formData = new FormData(form);
        return Object.fromEntries(formData.entries()) as unknown as IUser;
    }

    renderResponse(data: IUser): void {
        console.log('Response:', JSON.stringify(data, null, 2));
    }

    populateForm(userData: IUser): void {
        const form = document.getElementById('user-form') as HTMLFormElement;
        if (!form) return;

        Object.entries(userData).forEach(([key, value]) => {
            const input = form.querySelector(`[name="${key}"]`) as HTMLInputElement | HTMLSelectElement | null;
            if (input) {
                if (input.type === 'date') {
                    input.value = new Date(value).toISOString().split('T')[0];
                } else {
                    input.value = value.toString();
                }
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const submit = document.getElementById("user-form") as HTMLFormElement;
    console.log(submit);
    const errormsg = document.querySelector(".error-msg") as HTMLSpanElement;
    const formHeading = document.getElementById('form-heading') as HTMLHeadingElement;
    const addBtn = document.getElementById("add-user-btn") as HTMLButtonElement;
    const updateBtn = document.getElementById("modify-user-btn") as HTMLButtonElement;

    const userLogic = new UserLogic();
    const userUI = new UserUI();

    let currentUserId: number | null = null;

    addBtn.addEventListener("click", () => {
        formHeading.textContent = 'Add User';
        submit.reset();
        errormsg.textContent = "";
        currentUserId = null;
    });

    updateBtn.addEventListener("click", () => {
        formHeading.textContent = 'Update User';
        const sampleUserData: IUser = {
            userId: 1,
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            birthDate: "1990-01-01",
            gender: "male",
        };

        currentUserId = sampleUserData.userId!;
        userUI.populateForm(sampleUserData);
    });


    submit.addEventListener("submit", async (event: Event) => {
        event.preventDefault();
        console.log("Submit event triggered!"); // Add this line
        errormsg.textContent = "";

        const formID = document.getElementById("user-form") as HTMLFormElement;
        console.log("Form found:", formID); // Check if form exists
        const userData = userUI.collectFormData(formID);
        console.log("User data collected:", userData);

        if (formHeading.textContent === 'Add User') {
            await handleAddUser(userData);
        } else if (formHeading.textContent === 'Update User') {
            if (currentUserId !== null) {
                await handleUpdateUser(userData, currentUserId);
            } else {
                errormsg.textContent = "User ID is missing!";
            }
        }
    });

    async function handleAddUser(userData: IUser) {
        try {
            const addedUser = await userLogic.addUser(userData);
            userUI.renderResponse(addedUser);
            errormsg.textContent = "User Added Successfully!";
        } catch (error) {
            errormsg.textContent = error instanceof Error ? error.message : "An unknown error occurred.";
        }
    }

    async function handleUpdateUser(userData: Partial<IUser>, userId: number) {
        try {
            const updatedUser = await userLogic.updateUser(userId, userData);
            userUI.renderResponse(updatedUser);
            errormsg.textContent = "User Updated Successfully!";
        } catch (error) {
            errormsg.textContent = error instanceof Error ? error.message : "An unknown error occurred.";
        }
    }
});
