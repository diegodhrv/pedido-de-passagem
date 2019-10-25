<template>
<div class="container">
  <div class="tile is-12 is-vertical is-parent">
    <div class="tile is-child box" style="text-align: center; background-color: rgba(255,255,255, .90)">
      <p class="title">SOLICITAÇÃO DE PASSAGEM RODOVIÁRIA</p>       
    </div>
</div>

<div class="tile is-ancestor">
  
  <div class="tile is-parent">
    <div class="tile is-child box" style="background-color: rgba(255,255,255, .90);">
      <p class="title" style="text-align: center">Formuário</p>
            <section>
        <b-field>
            <b-input placeholder="Email" type="email"></b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Number"
                type="number"
                min="10"
                max="20">
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="User handle (custom validation for only lowercase)"
              type="text"
              required
              validation-message="Only lowercase is allowed"
              pattern="[a-z]*">
            </b-input>
        </b-field>

        <b-field>
            <b-input placeholder="URL" type="url"></b-input>
        </b-field>

        <b-field>
            <b-input type="textarea"
                minlength="10"
                maxlength="100"
                placeholder="Maxlength automatically counts characters">
            </b-input>
        </b-field>
    </section>
     <div class="buttons">
            <b-button type="is-primary" expanded>Enviar</b-button>
        </div>
    </div>
  </div>

  <div class="tile is-6 is-vertical is-parent">
    <div class="tile is-child box" style="background-color: rgba(255,255,255, .90);">
      <p class="title" style="text-align: center">Atenção</p>
      <b-message type="is-danger" has-icon>
            (a) Enviar a Solicitação de Passagem Rodoviária com antecedência mínima de 10 (DEZ) dias da data da viagem.
      </b-message>
       <b-message type="is-danger" has-icon>
            (b) Solicitações emergenciais deverão ser encaminhadas pelos Chefes de Divisão para o email: "transporte.gapct@gmail.com".
      </b-message>
    </div>
  </div>
</div>
</div>
  
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      message: ""
    }
  }
}
</script>

<style>
html{
 background-image: url('../../assets/img.svg');
    background-repeat: no-repeat;
    background-size: 100%;
        background-position: bottom;
         background-attachment: fixed;
         height: 100vh;
         width: 100vw;
}

</style>
