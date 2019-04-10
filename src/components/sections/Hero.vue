
<template>
    <div class="home-hero hero is-medium">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column">
                        <h3 class="is-size-4 is-marginless is-family-primary has-text-weight-bold is-blue-light">Nimiq GPU Miner</h3>
                        <h1 class="is-size-1 m-b-md in-blue-dark is-the-hero">NoncerPro</h1>
                        <p class="is-size-5 is-blue-dark">NoncerPro is a powreful GPU miner with local statistics API and is compatible with HiveOS. </p>
                    </div>
                    <div class="column">
                        <div class="inline-center inline-tablet-center m-t-md">
                            <div>
                                <link-box url="https://github.com/NoncerPro/noncerpro-nimiq-cuda/releases" icon="far fa-arrow-alt-circle-down" text="NVIDIA" disable=0></link-box>
                            </div>
                            <div>
                                <link-box url="https://github.com/NoncerPro/noncerpro-nimiq-opencl/releases" icon="far fa-arrow-alt-circle-down" text="AMD" disable=0></link-box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LinkBox from '~/components/LinkBox.vue'
export default {
components: {
    LinkBox
  }
}
</script>
