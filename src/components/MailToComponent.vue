<template>
    <div class="mail-to-form">
        <input 
            class="mail-to-form__input"
            v-model="names" 
            placeholder="Imię i nazwisko"
        />
        <input 
            class="mail-to-form__input"
            v-model="email" 
            placeholder="Adres e-mail"
        />
        <textarea 
            class="mail-to-form__textarea"
            v-model="message"
            placeholder="Wiadomość"
        />
        <button
            class="mail-to-form__button"
        >
            Wyślij
        </button>
    </div>
</template>

<script setup lang="ts">
    var names:string;
    var email:string;
    var message:string;

</script>

<style lang="scss" scoped>
.mail-to-form{
    display: flex;
    flex-direction: column;
    min-width: 400px;
    width: 50vw;
    gap: 12px;

    &__input{
        font-size: 14px;
        height: 30px;
        padding-left: 12px;
        box-shadow: inset rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        border: none;

        &:focus{
            outline: none;
        }
    }

    &__textarea{
        font-size: 14px;
        height: 80px;
        padding-left: 12px;
        padding-top: 8px;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        box-shadow: inset rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        border: none;
    }

    textarea{
        resize: vertical;
    }

    &__button{
        width: 100px;
        height: 30px;
        align-self: center;
        background: #42b983;
        color: white;
        font-weight: bold;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
        border: none;
        opacity: 75%;

        &:hover{
            opacity: 100%;
        }
    }
}
</style>