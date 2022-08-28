<template>
   <header>
        <nav>
            <div class="logo">
                <router-link to="/">Inicio</router-link>
            </div>
            <ul>
                <li>
                    <router-link to="/transformacoes">Transformações</router-link>
                </li>
                <li>
                    <router-link to="/familia">Familia</router-link>
                </li>
            </ul>
        </nav>
   </header>
</template>
<script>
export default {
    name: 'HeaderComponent',
}
</script>
<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    a {
        color: #e7e5e8
    }
    background: #1c4595;
    color: #e7e5e8;
        nav {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            align-content: space-between;
            padding: 20px;
                .logo {
                    flex: 1;
                }
                ul {
                    li {
                        display: inline-block;
                        a {
                            padding: 0 10px;
                            margin-left: 10px;
                              &.router-link-exact-active {
                                    color: #fbbc42;
                                }
                        }
                    }
                }
        }
}
</style>