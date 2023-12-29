import { useState, useId } from "react";
import women from "./assets/women.jpg";
import { Button, Typography, Input, Label, Avatar } from "./design-system";

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Avatar type="initials" size="sm" shape="circle">
                Khulkar Sharipova
            </Avatar>
            <Avatar type="initials" size="md" shape="circle">
                Khulkar Sharipova
            </Avatar>
            <Avatar type="initials" size="lg" shape="circle">
                Khulkar Sharipova
            </Avatar>
            <br />
            <Avatar type="photo" size="sm" shape="rounded" imageUrl={women}>
                Khulkar Sharipova
            </Avatar>
            <Avatar type="photo" size="md" shape="rounded" imageUrl={women}>
                Khulkar Sharipova
            </Avatar>
            <Avatar type="photo" size="lg" shape="circle" imageUrl={women}>
                Khulkar Sharipova
            </Avatar>
            <br />
            <Avatar type="initials" size="sm" shape="rounded">
                Khulkar Sharipova
            </Avatar>
            <Avatar type="photo" size="md" shape="rounded" imageUrl={women}>
                Khulkar Sharipova
            </Avatar>
            <Avatar type="photo" size="lg" shape="rounded" imageUrl={women}>
                Khulkar Sharipova
            </Avatar>
        </div>
    );
};

export { App };
