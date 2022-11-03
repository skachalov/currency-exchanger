<template>
    <div id="auth-page-container">
        <div id="auth-btn-wrapper">
            <auth-button />
        </div>
    </div>
</template>

<script setup>
import AuthButton from "@/components/AuthPage/AuthButton"
</script>

<style lang="scss" scoped>
#auth-page-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#auth-btn-wrapper {
    height: 500px;
    width: 800px;
    background-color: $base1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>