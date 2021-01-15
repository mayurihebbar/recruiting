$(document).ready(function () {
        $('select.ddlFilterTableRow').bind('change', function () {
            $('select.ddlFilterTableRow').attr('disabled', 'disabled');
           $('#careersTable').find('.cr-row').hide();
            var critriaAttribute = '';

            $('select.ddlFilterTableRow').each(function () {
                if ($(this).val() != '0') {
                    critriaAttribute += '[data-' + $(this).data('attribute') + '="' + $(this).val() + '"]';
                }
            });

            $('#careersTable').find('.cr-row' + critriaAttribute).show();
            $('select.ddlFilterTableRow').removeAttr('disabled');
        });
    });

