'use client';
import { SignOutButton } from "@/components/sign-out-button";
import { getAccountLinkStatus } from "@/lib/auth/getAccountLinkStatusServerAction";
import { getUserName } from "@/lib/auth/getUserNameServerAction";
import { handleGoogleSignIn } from "@/lib/auth/googleSignInServerAction";
import { unlinkGoogleAccount } from "@/lib/auth/unLinkGoogleAccountServerAction";
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';
import { getUserRole } from "@/lib/auth/getUserRoleServerAction";

export const DashboardPage: React.FC = () => {
    const [isAccountLinked, setIsAccountLinked] = useState(false);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const { update } = useSession();

    useEffect(() => {
        const userInfo = async () => {
            const name = await getUserName();
            if (name) {
                setUsername(name);
            }
            const role = await getUserRole();
            if (role) {
                setRole(role);
            }
        };
        const accountLinkStatus = async () => {
            try {
                const status = await getAccountLinkStatus();
                setIsAccountLinked(status);
            } catch (error) {
                console.log('Failed to get account link status:', error);
            }
        };
        userInfo();
        accountLinkStatus(); // Fetch status on component mount
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Dashboard Page</h2>
                <div className="space-y-6">
                    <div className="text-center">
                        <div className="text-lg font-medium mb-2">Role: {role}</div>
                        <div className="text-xl font-semibold mb-4">{username}</div>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter name"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <button
                            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                            onClick={() => update({ name: username })}
                        >
                            Update Name
                        </button>
                        <button
                            className={`w-full py-2 rounded-lg ${isAccountLinked ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-blue-600 text-white hover:bg-blue-700'} transition duration-200`}
                            onClick={
                                isAccountLinked
                                    ? async () => {
                                        await unlinkGoogleAccount().then(() => {
                                            setIsAccountLinked(false);
                                        });
                                    }
                                    : async () => {
                                        await handleGoogleSignIn().then(() => {
                                            setIsAccountLinked(true);
                                        });
                                    }
                            }
                        >
                            {isAccountLinked ? "Disconnect Google Account" : "Connect Google Account"}
                        </button>
                        <SignOutButton className="w-full py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
