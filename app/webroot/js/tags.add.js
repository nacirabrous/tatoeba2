/**
 * Tatoeba Project, free collaborative creation of multilingual corpuses project
 * Copyright (C) 2009  Allan SIMON (allan.simon@supinfo.com)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


$(document).ready(function() {
    $("#TagTagName").keydown(function(e){
        if (e.keyCode == 13) {
            addTag();
            e.preventDefault();
        }
    });

    $("#addNewTag").click(function(e){
        e.preventDefault();
        addTag();
    });

    function addTag() {
        var sentenceId = $("#TagTagName").attr('data-sentence-id');
        var tagName = $("#TagTagName").val();
        var rootUrl = get_tatoeba_root_url();

        $("#TagTagName").val('');
        $(".tagsListOnSentence").append(
            "<div class='tags-loader loader'></div>"
        );
        $.post(
            rootUrl + "/tags/add_tag_post",
            { "sentence_id": sentenceId, "tag_name": tagName },
            function(data){
                $(".tags-loader").first().replaceWith(data);
            }
        );

    }
});

