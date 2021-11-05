import React from "react";

function BookingWidget() {
  return (
    <div class='auto-margin page-body'>
      <div class='flex-column'>
        <h2>
          Import the widget right before the closing body tag (&#x3C;/body&#x3E)
        </h2>
        <div class='code'>
          &#x3C;script type=&#x22;text/javascript&#x22;
          src=&#x22;https://muntra-dev.github.io/index.js&#x22;&#x3E;&#x3C;/script&#x3E;
        </div>
      </div>
      <div class='flex-column'>
        <h2>All caregivers at clinic</h2>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-widget primary&#x22; key=&#x22;0&#x22;
          muntra_clinic_id=&#x22;16&#x22;
          muntra_referral_source=&#x22;sveatandklinik.se&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div
          class='muntra-widget primary'
          key='0'
          muntra_clinic_id='16'
          muntra_referral_source='sveatandklinik.se'
        ></div>
      </div>
      <div class='flex-column'>
        <h2>Specific caregiver</h2>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-widget secondary&#x22; key=&#x22;1&#x22;
          muntra_caregiver_id=&#x22;2852&#x22; muntra_clinic_id=&#x22;16&#x22;
          muntra_referral_source=&#x22;sveatandklinik.se&#x22;
          muntra_button_text=&#x22;Boka Specific
          behandlare&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div
          class='muntra-widget secondary'
          key='1'
          muntra_caregiver_id='2852'
          muntra_clinic_id='16'
          muntra_referral_source='sveatandklinik.se'
          muntra_button_text='Boka Specific behandlare'
        ></div>
      </div>
      <div class='flex-column'>
        <h2>Specific role</h2>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-widget secondary&#x22; key=&#x22;2&#x22;
          muntra_role_id=&#x22;4&#x22; muntra_clinic_id=&#x22;16&#x22;
          muntra_referral_source=&#x22;sveatandklinik.se&#x22;
          muntra_button_text=&#x22;Boka
          tandhygienist&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div
          class='muntra-widget'
          key='2'
          muntra_role_id='4'
          muntra_clinic_id='16'
          muntra_referral_source='sveatandklinik.se'
          muntra_button_text='Boka tandhygienist'
        ></div>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-widget secondary&#x22; key=&#x22;3&#x22;
          muntra_role_id=&#x22;3&#x22; muntra_clinic_id=&#x22;16&#x22;
          muntra_referral_source=&#x22;sveatandklinik.se&#x22;
          muntra_button_text=&#x22;Boka
          tandl&#xE4;kartid&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div
          class='muntra-widget secondary'
          key='3'
          muntra_role_id='3'
          muntra_clinic_id='16'
          muntra_referral_source='sveatandklinik.se'
          muntra_button_text='Boka tandläkartid'
        ></div>
      </div>
      <div class='flex-column'>
        <h2>Specific role and procedure</h2>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-widget&#x22; key=&#x22;4&#x22;
          muntra_clinic_id=&#x22;16&#x22; muntra_procedure_id=&#x22;4&#x22;
          muntra_role_id=&#x22;3&#x22;
          muntra_referral_source=&#x22;sveatandklinik.se&#x22;
          muntra_button_text=&#x22;Boka akut
          tandl&#xE4;kartid&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div
          class='muntra-widget'
          key='4'
          muntra_clinic_id='16'
          muntra_procedure_id='4'
          muntra_role_id='3'
          muntra_referral_source='sveatandklinik.se'
          muntra_button_text='Boka akut tandläkartid'
        ></div>
        <div class='code'>
          &#x3C;div class=&#x22;muntra-widget secondary&#x22; key=&#x22;5&#x22;
          muntra_procedure_id=&#x22;9&#x22; muntra_role_id=&#x22;4&#x22;
          muntra_clinic_id=&#x22;16&#x22;
          muntra_referral_source=&#x22;sveatandklinik.se&#x22;
          muntra_button_text=&#x22;Boka tandblekningstid (hos
          tandhygienist)&#x22;&#x3E;&#x3C;/div&#x3E;
        </div>
        <div
          class='muntra-widget secondary'
          key='5'
          muntra_procedure_id='9'
          muntra_role_id='4'
          muntra_clinic_id='16'
          muntra_referral_source='sveatandklinik.se'
          muntra_button_text='Boka tandblekningstid (hos tandhygienist)'
        ></div>
      </div>
      <div>
        <div class='flex-column'>
          <h2>A widget without modal window</h2>
          <div class='code'>
            &#x3C;div class=&#x22;muntra-widget without-modal&#x22;
            key=&#x22;6&#x22; muntra_clinic_id=&#x22;16&#x22;
            muntra_referral_source=&#x22;sveatandklinik.se&#x22;
            muntra_without_modal=&#x22;true&#x22;&#x3E;&#x3C;/div&#x3E;
          </div>
          <div
            class='muntra-widget without-modal'
            key='6'
            muntra_clinic_id='16'
            muntra_referral_source='sveatandklinik.se'
            muntra_without_modal='true'
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BookingWidget;
