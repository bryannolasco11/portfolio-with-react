import React from 'react';

function Project({ onclose, currentProject}) {
    console.log(currentProject)
    const { id, name, description} = currentProject;
    return (
        // JSX
        <div>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Project</button>

            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <p>
                            Project Description
                        </p>
                        <p>
                            Project Link
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;