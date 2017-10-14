<template>
  <div class="profile">
    <div class="profile__pic"><img src="~assets/me.jpg" alt="Ivan Dwijaya" title="Ivan Dwijaya"></div>
    <div class="profile__label">
      <div class="profile__name">Ivan Dwijaya</div>
      <div class="profile__title">Front End Web Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Profile'
    }
  }
}
</script>

<style lang="scss">
.profile {
  display: flex;
  align-items: center;
}

.profile__pic {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.profile__label {
  margin-left: 20px;
}

.profile__name {
  font-weight: bold;
  font-size: 1.8rem;
}

.profile__title {
  font-size: 1.3rem;
}
</style>
