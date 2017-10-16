<template>
  <div class="profile">
    <div class="profile__pic"><img src="~assets/me.jpeg" alt="Ivan Dwijaya" title="Ivan Dwijaya"></div>
    <div class="profile__label">
      <div class="profile__name">Ivan Dwijaya</div>
      <div class="profile__title">Front End Web Developer</div>
    </div>
  </div>
</template>

<script>
export default {}
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

@media only screen and (max-width: 980px) {
  .profile__title {
    font-size: 1rem;
  }

  .profile__name {
    font-size: 1.4rem;
  }

  .profile__pic {
    width: 60px;
    height: 60px;
  }
}
</style>
